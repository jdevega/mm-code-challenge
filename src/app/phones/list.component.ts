import { Component, OnInit } from '@angular/core'
import { PhoneService } from '../phone.service'
import { Phone } from './phone'

@Component({
  selector: 'content',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PhoneListComponent implements OnInit {
  title = 'Phones'
  phones: Phone[]
  constructor(private phoneService: PhoneService) { }
  getPhones(): void {
    this.phoneService.getPhones().then(phones => this.phones = phones)
  }
  ngOnInit(): void {
    this.getPhones();
  }
}
