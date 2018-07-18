import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { EventsComponent } from './events/events.component';
import { CamerasComponent } from './cameras/cameras.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { OverviewCameraComponent } from './overview-camera/overview-camera.component';
import { ListDevicesComponent } from './list-devices/list-devices.component';

const appRoutes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'events', component: EventsComponent },
    { path: 'devices', component: DevicesComponent },
    { path: 'cameras', component: CamerasComponent },
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    DevicesComponent,
    EventsComponent,
    CamerasComponent,
    LoginComponent,
    ListUsersComponent,
    ListEventsComponent,
    OverviewCameraComponent,
    ListDevicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
