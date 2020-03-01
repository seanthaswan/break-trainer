import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-log-display",
  templateUrl: "./log-display.component.html",
  styleUrls: ["./log-display.component.scss"]
})
export class LogDisplayComponent implements OnInit {
  @Input() entry: object;
  constructor() {}

  ngOnInit() {}
}
