import { Component, OnInit } from "@angular/core";
import "firebase/database";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { Observable, ObservableLike } from "rxjs";

@Component({
  selector: "app-session-log",
  templateUrl: "./session-log.component.html",
  styleUrls: ["./session-log.component.scss"],
})
export class SessionLogComponent implements OnInit {
  title: string = "Session Log";
  sectionHeading: string = "Log your sesh. Track your progress. Party.";
  username: string = "sswanson";
  itemValue = "";
  itemList: Observable<any[]>;
  logEntries: any[] = [];
  selectedEntry: {
    duration: string;
    date: string;
    location: string;
    victories: any[];
    challenges: any[];
    notes: string;
  };

  //----------
  constructor(public db: AngularFireDatabase) {
    // To get the data from Firebase, we first create a reference to the list.
    // ... Then we create the observable for that reference.
    // ... Then we subscribe and process the data.
    this.itemList = db.list(`posts/${this.username}`).valueChanges();
    this.itemList.subscribe((res) => {
      res.forEach((i) => {
        this.logEntries.push(i);
      });
      console.log(this.logEntries);
    });
  }

  //----------
  ngOnInit() {}

  //----------
  handleLogEntryClick = (e) => {
    this.selectedEntry = {
      date: "",
      location: "",
      duration: "",
      victories: [],
      challenges: [],
      notes: "",
    };

    let selectedLogTimestamp = parseInt(e.target.dataset.entryDate, 10);
    let sessionLogContainer = document.querySelector("app-session-log");

    // Using the date from list of log entries, find the corresponding full entry.
    this.logEntries.map((entry) => {
      if (entry.date === selectedLogTimestamp) {
        let parsedDuration = this.parseDuration(entry.duration);
        this.selectedEntry = entry;
        this.selectedEntry.duration = parsedDuration;
        console.log(this.selectedEntry);
      }
    });
  };

  //----------
  parseDuration(duration) {
    let newDuration: string;

    if (!duration.includes(":")) {
      return duration;
    }

    // Duration comes in as a string like "1:30:00"
    // We want to pick that apart and label the hours and minutes
    // And then at the end we throw away the seconds
    let oldDuration = duration.split(":");

    // Determines if the number of hours is plural or singular
    oldDuration[0] =
      parseInt(oldDuration[0], 10) > 1
        ? (oldDuration[0] += "hrs ")
        : (oldDuration[0] += "hr ");

    // Single digit hours are padded with 0, we want to remove that 0.
    oldDuration[0] = this.stripLeadingZero(oldDuration[0]);

    // Determines if the number of minutes is singular or plural
    oldDuration[1] =
      parseInt(oldDuration[1], 10) > 1
        ? (oldDuration[1] += "mins")
        : (oldDuration[1] += "min");

    // Single digit minutes are padded with 0, we want to remove that 0.
    oldDuration[1] = this.stripLeadingZero(oldDuration[1]);

    // Remove the seconds
    oldDuration.pop();

    newDuration = oldDuration.join("");

    // Give us back the new duration string.
    return newDuration;
  }

  //----------
  stripLeadingZero(time) {
    let oldTime = time.split("");
    let strippedTime;

    if (oldTime[0] != 0) {
      return oldTime.join("");
    }

    strippedTime = oldTime;
    strippedTime.shift();
    strippedTime = strippedTime.join("");

    return strippedTime;
  }
}
