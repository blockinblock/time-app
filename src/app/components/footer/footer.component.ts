import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { TimeUtilsService } from '../../services/time-utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  private time = '06:00';
  private display = '0';        // Value (in mins) to display on the time slider
  private prevTime: string;
  private timeArray: any[];
  private curTime;

  constructor(private messageService: MessageService,
              private timeUtilsService: TimeUtilsService) {

    this.formatLabel = this.formatLabel.bind(this);

    // Get array of future times
    this.timeUtilsService.setTimeWindow$.subscribe((value) => {
      this.timeArray = value;
    });

    // Get the clock
    this.timeUtilsService.time.subscribe((now: Date) => {
      this.curTime = now.toLocaleTimeString();
    });
  }

  /**
   * Takes a tick interval number from the time slider and formats the correct time
   * Additionally triggers the message service with the time
   * @param value tick interval integer
   */
  formatLabel(value: number) {
    this.timeUtilsService.setTimeWindow();

    switch (value) {
      case 0: {
        this.display = '0';
        this.time = this.timeArray[0].value;
        break;
      }
      case 1: {
        this.display = '+5';
        this.time = this.timeArray[1].value;
        break;
      }
      case 2: {
        this.display = '+10';
        this.time = this.timeArray[2].value;
        break;
      }
      case 3: {
        this.display = '+15';
        this.time = this.timeArray[3].value;
        break;
      }
      case 4: {
        this.display = '+20';
        this.time = this.timeArray[4].value;
        break;
      }
      case 5: {
        this.display = '+25';
        this.time = this.timeArray[5].value;
        break;
      }
      case 6: {
        this.display = '+30';
        this.time = this.timeArray[6].value;
        break;
      }
      case 7: {
        this.display = '+35';
        this.time = this.timeArray[7].value;
        break;
      }
      case 8: {
        this.display = '+40';
        this.time = this.timeArray[8].value;
        break;
      }
      case 9: {
        this.display = '+45';
        this.time = this.timeArray[9].value;
        break;
      }
      case 10: {
        this.display = '+50';
        this.time = this.timeArray[10].value;
        break;
      }
      case 11: {
        this.display = '+55';
        this.time = this.timeArray[11].value;
        break;
      }
    }

    // If the time slider got moved
    if (this.time !== this.prevTime) {
      this.messageService.setMessage(this.time);
      this.prevTime = this.time;
    }

    return this.display;
  }
}
