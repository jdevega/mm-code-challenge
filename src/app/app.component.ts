import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phones'
  phones = [
    {
      id: 1,
      name: 'iPhone 10',
      color: 'Silver',
      price: 1200,
      image:
        'https://www.theinquirer.net/w-images/e5611993-6ccb-4942-bb75-83265422fb66/1/iPhoneX1-300x550.png'
    },
    {
      id: 2,
      name: 'iPhone 8',
      color: 'Gold',
      price: 1100,
      image: 'http://brain-images.cdn.dixons.com/5/7/10168675/u_10168675.jpg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy s8',
      color: 'Black',
      price: 800,
      image: 'https://www.jetstereo.com/Files/Products/161070_1.jpeg'
    }
  ]
}
