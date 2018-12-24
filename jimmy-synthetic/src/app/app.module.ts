import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { AppService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
