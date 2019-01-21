import {Component} from '@angular/core';
import {data, Country} from './data';
import {FormControl} from '@angular/forms';


class Item {
    name: string;
    value: number;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})


export class HomePage {

    dataForTable: Country[];
    myControl = new FormControl();
    sortOptions: Item[];


    constructor() {
        this.dataForTable = data;
        this.sortOptions = [{name: 'Country', value: 0}, {name: 'Capital', value: 1}, {name: 'Continent', value: 2}];
    }

    sort(value) {
        value = parseInt(value);

        switch (value) {
            case 0:
                this.dataForTable = this.dataForTable.sort((a, b) => a.CountryName.localeCompare(b.CountryName));
                break;
            case 1:
                this.dataForTable = this.dataForTable.sort((a, b) => a.CapitalName.localeCompare(b.CapitalName));
                break;
            case 2:
                this.dataForTable = this.dataForTable.sort((a, b) => a.ContinentName.localeCompare(b.ContinentName));
        }

    }

    filter(e) {
        const searchTerm = e.toLowerCase();
        this.dataForTable = data.filter((c: Country) => c.CountryName.toLowerCase().includes(searchTerm)
            || c.ContinentName.toLowerCase().includes(searchTerm)
            || c.CapitalName.toLowerCase().includes(searchTerm)
        );
    }

    openMap(c: Country) {
        window.open('https://maps.google.com/?q=' + c.CapitalLatitude + ',' + c.CapitalLongitude + '&ll=' + c.CapitalLatitude + ',' + c.CapitalLongitude + '&z=4');
    }

}
