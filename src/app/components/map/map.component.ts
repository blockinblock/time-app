import { Component, AfterViewInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { TimeUtilsService } from '../../services/time-utils.service';
import * as ol from 'openlayers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  private map: ol.Map = null;
  private mapId = 'MyMap';
  private selectedTime: string;
  private osmLayer;
  private timeLayer;
  private currentTime = '';

  constructor(private messageService: MessageService,
              private timeUtilsService: TimeUtilsService) {

    // Detect if time slider moved and create layer
    this.messageService.setMessage$.subscribe((value) => {
      this.selectedTime = value;

      if (this.map) {
        this.removeTimeLayer();
        this.createTimeLayer(this.selectedTime);
        console.log('this.selectedTime: ' + this.selectedTime);
      }
    });

    // Current time is used for the initial fetch of the WMS time layer
    this.timeUtilsService.setTime$.subscribe((value) => {
      this.currentTime = value;
      console.log('currentTime: ' + this.currentTime);
    });

    // TODO: Refresh time layer every 5 mins

  }

  ngAfterViewInit() {
    this.timeUtilsService.setTime();

    this.map = new ol.Map({
      target: this.mapId,
      view: new ol.View({
        center: ol.proj.fromLonLat([10.4150, 51.0344]),
        zoom: 6
      })
    });

    this.osmLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    this.osmLayer.setProperties({name : 'osm'});
    this.map.addLayer(this.osmLayer);

    this.timeLayer = this.createTimeLayer(this.currentTime);
  }

  /**
   * Removes the time-based layer from the map
   */
  removeTimeLayer() {
    this.map.getLayers().forEach(layer => {
      if (layer.get('name') === 'time') {
        this.map.removeLayer(layer);
      }
    });
  }

  /**
   * Adds the time-based layer to the map
   * @param time the time that was clicked e.g. '06:00'
   */
  createTimeLayer(time: string) {
    this.timeLayer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'https://maps.dwd.de/geoserver/dwd/wms/',
        projection: 'EPSG:3857',
        crossOrigin: 'anonymous',
        params: {
          LAYERS: 'dwd:FX-Produkt',
          FORMAT: 'image/png',
          TIME: time
        }
      })
    });

    this.timeLayer.setProperties({name : 'time'});
    this.map.addLayer(this.timeLayer);
    console.log(this.timeLayer);
  }
}
