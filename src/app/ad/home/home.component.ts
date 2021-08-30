import {Component, OnInit} from '@angular/core';
import {AdReactiveService} from '../services/ad-reactive.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AdReactiveService]
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

}
