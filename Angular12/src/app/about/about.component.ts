import {Component, Input} from '@angular/core';
import {Directive} from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  color = '';
}
