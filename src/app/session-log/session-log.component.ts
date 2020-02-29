import { Component, OnInit } from "@angular/core";
import "firebase/database";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireDatabase,
} from "angularfire2/database";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { Observable, ObservableLike } from "rxjs";

@Component({
  selector: "app-session-log",
  templateUrl: "./session-log.component.html",
  styleUrls: ["./session-log.component.scss"]
})
export class SessionLogComponent implements OnInit {
  title: string = "Session Log";
  sectionHeading: string = "Log your seshes, track your progress, party.";
  username: string = "sswanson";
  itemValue = "";
  itemList: Observable<any[]>;
  logEntries: any[] = [];
  selectedEntry: object; 

  constructor(public db: AngularFireDatabase) {
    // To get the data from Firebase, we first create a reference to the list.
    // ... Then we create the observable for that reference.
    // ... Then we subscribe and process the data.
    this.itemList = db.list(`posts/${this.username}`).valueChanges();
    this.itemList.subscribe(res => {
      res.forEach(i => {
        this.logEntries.push(i);
      });
      console.log(this.logEntries);
    });
  }

  ngOnInit() {
  }

  handleLogEntryClick = (e) => {
    this.selectedEntry = {};
    let selectedLogTimestamp = parseInt(e.target.dataset.entryDate,10);

    this.logEntries.map((entry) => {
      if (entry.date === selectedLogTimestamp) {
        this.selectedEntry = entry;
        console.log(this.selectedEntry);
      } 
    })
  }
}
