import { Component } from '@angular/core';
import { faThumbsDown,faAddressBook,faBell} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mypro';
  bell:any = faBell
  thumbsdown:any = faThumbsDown
  address:any = faAddressBook
}
