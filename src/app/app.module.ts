import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
