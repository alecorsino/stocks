import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.styl']
})
export class IconButtonComponent implements OnInit {

  @Input() iconClass:string;
  @Input() buttonClass:string;

  constructor() { }

  ngOnInit() {
  }

}
