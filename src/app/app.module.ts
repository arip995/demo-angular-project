import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './class-binding/info.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { IfForSwitchDirectiveComponent } from './if-for-switch-directive/if-for-switch-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    EventBindingComponent,
    IfForSwitchDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
