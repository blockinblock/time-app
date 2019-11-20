import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  private time = '06:00';

  constructor(private messageService: MessageService) {
    this.formatLabel = this.formatLabel.bind(this);
  }

  ngOnInit() {
  }

  /**
   * Event handler takes a message and triggers message service
   * @param message the string message
   */
  click(message: string) {
    this.messageService.setMessage(message);
  }

  /**
   * Takes a tick interval number from the time slider and formats the correct time
   * Additionally triggers the message service with the time
   * @param value tick interval integer
   */
  formatLabel(value: number) {
    switch (value) {
      case 1: {
        this.time = '06:00';
        break;
      }
      case 2: {
        this.time = '08:00';
        break;
      }
      case 3: {
        this.time = '10:00';
        break;
      }
      case 4: {
        this.time = '11:00';
        break;
      }
      case 5: {
        this.time = '12:00';
        break;
      }
      case 6: {
        this.time = '14:00';
        break;
      }
      case 7: {
        this.time = '16:00';
        break;
      }
      case 8: {
        this.time = '18:00';
        break;
      }
      case 9: {
        this.time = '20:00';
        break;
      }
      case 10: {
        this.time = '23:00';
        break;
      }
    }

    // TODO: triggers every time mouse enters time slider area. Suppress unnecessary events?
    this.messageService.setMessage(this.time);
    return this.time;
  }
}
