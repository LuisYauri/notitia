import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { HomeComponent } from './pages/home/home.component';
import {NgZorroModule} from './ng-zorro/ng-zorro.module';
import { ListComponent } from './pages/list/list.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterBlockComponent } from './components/footer-block/footer-block.component';
import { ViewComponent } from './pages/view/view.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderMenuAdminComponent } from './components/header-menu-admin/header-menu-admin.component';
import { AddComponent } from './pages/add/add.component';
import { CiudadanoComponent } from './pages/ciudadano/ciudadano.component';
import { HeaderMenuCiudadanoComponent } from './components/header-menu-ciudadano/header-menu-ciudadano.component';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    HeaderMenuComponent,
    FooterBlockComponent,
    ViewComponent,
    LoginComponent,
    AdminComponent,
    HeaderMenuAdminComponent,
    AddComponent,
    CiudadanoComponent,
    HeaderMenuCiudadanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
