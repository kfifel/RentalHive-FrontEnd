import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input() title: string = "";
  @Input() links: { value: string, route: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
