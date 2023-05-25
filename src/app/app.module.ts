import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackedLunchComponent } from './packed-lunch/packed-lunch.component';
import { PackedListComponent } from './packed-lunch/packed-list/packed-list.component';
import { PackedDetailsComponent } from './packed-lunch/packed-details/packed-details.component';
import { PackedItemComponent } from './packed-lunch/packed-list/packed-item/packed-item.component';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodEditComponent } from './food/food-list/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackedLunchComponent,
    PackedListComponent,
    PackedDetailsComponent,
    PackedItemComponent,
    FoodComponent,
    FoodListComponent,
    FoodEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
