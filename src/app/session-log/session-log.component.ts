import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

import "firebase/firestore";

@Component({
  selector: "app-session-log",
  templateUrl: "./session-log.component.html",
  styleUrls: ["./session-log.component.scss"]
})
export class SessionLogComponent implements OnInit {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection("posts").valueChanges();
  }

  ngOnInit() {
    console.log(this.items);
  }
}
