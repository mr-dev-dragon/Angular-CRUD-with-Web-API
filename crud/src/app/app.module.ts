import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AhmeComponent } from './ahme/ahme.component';


@NgModule({
  declarations: [
    AppComponent,
    AhmeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
