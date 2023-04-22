import { Component } from '@angular/core';
import {faThumbsUp, faClockFour} from '@fortawesome/free-regular-svg-icons';
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent {
  faThumbsUp = faThumbsUp;
  faClockFout = faClockFour;
  faPiggyBank = faPiggyBank;
}
