import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-login-form]",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logIn(e: Event) {
    // TODO: Make work.

    console.log(e);
    document.querySelector(".landing-container").classList.add("hidden");
    document.querySelector(".dashboard-container").classList.remove("hidden");
  }
}
