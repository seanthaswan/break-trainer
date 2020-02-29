import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-entry-view]',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss']
})
export class EntryViewComponent implements OnInit {
@Input() entry: any[];

  constructor() { }

  ngOnInit() {
  }

}
