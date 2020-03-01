import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workout",
  templateUrl: "./workout.component.html",
  styleUrls: ["./workout.component.scss"]
})
export class WorkoutComponent implements OnInit {
  sectionHeading: string = "Train smart. Level up your game.";
  constructor() {}

  ngOnInit() {}
}
