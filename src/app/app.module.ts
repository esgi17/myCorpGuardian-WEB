import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUsersComponent } from './modules/list/list-users/list-users.component';
import { ListGroupsComponent } from './modules/list/list-groups/list-groups.component';
import { ListEventsComponent } from './modules/list/list-events/list-events.component';
import { ListDevicesComponent } from './modules/list/list-devices/list-devices.component';
import { DetailUserComponent } from './modules/detail/detail-user/detail-user.component';
import { DetailGroupComponent } from './modules/detail/detail-group/detail-group.component';
import { DetailEventComponent } from './modules/detail/detail-event/detail-event.component';
import { DetailDeviceComponent } from './modules/detail/detail-device/detail-device.component';
import { DetailScheduleComponent } from './modules/detail/detail-schedule/detail-schedule.component';
import { UserComponent } from './pages/user/user.component';
import { DeviceComponent } from './pages/device/device.component';
import { CameraComponent } from './pages/camera/camera.component';
import { EventComponent } from './pages/event/event.component';
import { ListDoorsComponent } from './modules/list/list-doors/list-doors.component';
import { DetailDeviceEventsComponent } from './modules/detail/detail-device-events/detail-device-events.component';


const appRoutes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'event', component: EventComponent },
    { path: 'device', component: DeviceComponent },
    { path: 'camera', component: CameraComponent },
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ListUsersComponent,
    ListGroupsComponent,
    ListEventsComponent,
    ListDevicesComponent,
    DetailUserComponent,
    DetailGroupComponent,
    DetailEventComponent,
    DetailDeviceComponent,
    DetailScheduleComponent,
    UserComponent,
    DeviceComponent,
    CameraComponent,
    EventComponent,
    ListDoorsComponent,
    DetailDeviceEventsComponent
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
