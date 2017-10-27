import { Component, Input } from '@angular/core'
import { Phone } from './phone'

@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  @Input() phone: Phone
}
