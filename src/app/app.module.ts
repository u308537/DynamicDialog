import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {GMapModule} from 'primeng/gmap';

import { AppComponent }   from './app.component';
import { CountryService } from './service/country.service';
import { DialogMap } from './dialog/map-dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogMap
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ContextMenuModule,
    DynamicDialogModule,
    GMapModule,
    
    
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
  entryComponents: [
		DialogMap
	],
})
export class AppModule { }
