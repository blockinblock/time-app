import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Angular Materials
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

// Map Stuff
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularOpenlayersModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
