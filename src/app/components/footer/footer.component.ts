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
    // Binds the scope of this to the footer
    this.formatLabel = this.formatLabel.bind(this);
  }

  ngOnInit() {
  }

  click(message: string) {
    // https://stackoverflow.com/questions/44066905/angular-2-send-data-from-component-to-service
    this.messageService.setMessage(message);
  }

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

    // https://stackoverflow.com/questions/38245450/angular2-components-this-is-undefined-when-executing-callback-function
    // https://stackoverflow.com/questions/39474272/angular-losing-context-when-running-function-reference-for-a-function-of-a-base
    this.messageService.setMessage(this.time);

    return this.time;
  }
}
