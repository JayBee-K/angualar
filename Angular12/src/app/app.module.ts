import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { OnSalePipe } from './on-sale.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OnSalePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [
        {provide: DEFAULT_CURRENCY_CODE, useValue: '₫'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
