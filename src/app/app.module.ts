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

// Helpers
import { MessageService } from './services/message.service';
import { DatePipe } from '@angular/common';
import { TimeUtilsService } from './services/time-utils.service';

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
    DatePipe,
    MessageService,
    TimeUtilsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
