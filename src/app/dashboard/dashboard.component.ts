import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  sectionHeading: string = "How do you want to get down?";

  constructor() {}

  ngOnInit() {}

  // console.log(this.currentQuote);
}
