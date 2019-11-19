import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import * as ol from 'openlayers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {
  private myLayers: any;
  private map: ol.Map = null;
  private mapId = 'MyMap';
  private selectedTime: string;
  private osmLayer;
  private timeLayer;

  constructor(private messageService: MessageService) {
    this.messageService.setMessage$.subscribe((value) => {
      this.selectedTime = value;
      console.log('map: ' + value);

      if (this.map) {
        this.addLayer(this.selectedTime);
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.osmLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    this.timeLayer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/epa/wms/',
        projection: 'EPSG:3857',
        params: {
          LAYERS: 'epa:EPA_CO_Daily_2019_Calif_Jan01new',
          FORMAT: 'image/png',
          TIME: '2019-01-01T06:00:00.0Z'
        }
       })
    });

    this.myLayers = [this.osmLayer, this.timeLayer];

    // Set properties
    this.osmLayer.setProperties({name : 'osm'});
    this.timeLayer.setProperties({name : 'epa'});

    // Initialise map with layers
    this.map = new ol.Map({
      target: this.mapId,
      layers: this.myLayers,
      view: new ol.View({
        center: ol.proj.fromLonLat([-122.1916, 37.7857]),
        zoom: 10
      })
    });
    console.log('map inititalised');
  }

  /**
   * Removes the time-based layer from the map
   */
  removeTimeLayer() {
    this.map.getLayers().forEach(layer => {
      if (layer.get('name') === 'epa') {
        console.log('removing ... ' + layer.get('name'));
        this.map.removeLayer(layer);
      }
    });
  }

  /**
   * Adds an ol layer based on the button (time) clicked
   * @param time the time that was clicked e.g. '06:00'
   */
  addLayer(time: string) {
    const timeStamp = '2019-01-01T' + time + ':00.0Z';

    if (this.map) {
      this.removeTimeLayer();

      console.log('add layer...');

      this.timeLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/epa/wms/',
          projection: 'EPSG:3857',
          params: {
            LAYERS: 'epa:EPA_CO_Daily_2019_Calif_Jan01new',
            FORMAT: 'image/png',
            TIME: timeStamp
          }
        })
      });

      this.timeLayer.setProperties({name : 'epa'});
      this.map.addLayer(this.timeLayer);

      console.log(this.map.getLayers());
    }
  }
}
