import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { PagefooterComponent } from './components/pagefooter/pagefooter.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { PriceAndOptionsComponent } from './components/price-and-options/price-and-options.component';
import { DescriptionAndIngredientsComponent } from './components/description-and-ingredients/description-and-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    PageheaderComponent,
    PagefooterComponent,
    PriceAndOptionsComponent,
    DescriptionAndIngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
