import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  today: number;
  constructor() {}

  ngOnInit() {
    this.today = Date.now();
    setInterval(this.getCurrentTime, 1000);
  }

  getCurrentTime = () => {
    this.today = Date.now();
  };
}
