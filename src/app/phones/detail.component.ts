import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap'
import { PhoneService } from '../phone.service'
import { Phone } from './phone'

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  title: string
  phone: Phone
  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id')
        return console.log(id) || this.phoneService.getPhone(id)
      })
      .subscribe(phone => (this.phone = phone))
  }
}
