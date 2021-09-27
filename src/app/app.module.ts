import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './class-binding/info.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { IfForSwitchDirectiveComponent } from './if-for-switch-directive/if-for-switch-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeListComponent } from './services/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './services/employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutesComponent } from './routes/routes.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { MaterialAngularComponent } from './material-angular/material-angular.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ParamRoutingComponent } from './param-routing/param-routing.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    EventBindingComponent,
    IfForSwitchDirectiveComponent,
    ComponentInteractionComponent,
    PipesComponent,
    ServicesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    HttpComponent,
    RoutesComponent,
    ObservablesComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    MaterialAngularComponent,
    RxjsComponent,
    ParamRoutingComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
