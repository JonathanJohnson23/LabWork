import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { FancyCheckbox } from './fancy-checkbox/fancy-checkbox.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { PlayerSubscribeComponent } from './player-subscribe/player-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTextComponent,
    FancyCheckbox,
    SubscriptionFormComponent,
    PlayerSubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
