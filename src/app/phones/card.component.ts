import { Component, Input } from '@angular/core'
import { Phone } from './phone'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class PhoneCardComponent {
  @Input() phone: Phone
}
