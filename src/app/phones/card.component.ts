import { Component, Input } from '@angular/core'
import { Phone } from './phone'

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class PhoneCardComponent {
  @Input() phone: Phone
}
