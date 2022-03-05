import { Component, ViewChild } from '@angular/core';
import { CountryService } from './service/country.service';
import { Country } from './interface/country';

import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { DialogMap } from './dialog/map-dialog';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DialogService]

})
export class AppComponent {

  ref: DynamicDialogRef = new DynamicDialogRef;
  items: MenuItem[] = [];
  countries: Country[] = [];
  country!:Country;

  constructor(private countryService: CountryService, public dialogService: DialogService) { }

  ngOnInit() {
    this.countryService.getCountries().then(data => this.countries = data);
    this.items = [
      { label: 'View map', icon: 'pi pi-fw pi-map-marker', command: () => this.showDialog() }
    ];
  }

  showDialog() {
    this.ref = this.dialogService.open(DialogMap, {
      data: {
        options: {
          center: { lat: +this.country.lat!, lng: +this.country.long! },
          zoom: 3
        },
        overlays: [
          new google.maps.Marker({ position: { lat: +this.country.lat!, lng: +this.country.long! }, title: this.country.name }),]
      },
      header: 'COUNTRY ' + this.country.name,
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  ngOnDestroy() {
    alert('destroy');
    if (this.ref) {
      this.ref.close();
    }
  }
}

