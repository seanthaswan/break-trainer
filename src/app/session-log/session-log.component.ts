import { Component, OnInit } from "@angular/core";
import "firebase/database";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { Observable, ObservableLike } from "rxjs";

@Component({
  selector: "app-session-log",
  templateUrl: "./session-log.component.html",
  styleUrls: ["./session-log.component.scss"]
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
    this.itemList.subscribe(res => {
      res.forEach(i => {
        this.logEntries.push(i);
      });
      console.log(this.logEntries);
    });
  }

  //----------
  ngOnInit() {}

  //----------
  handleLogEntryClick = e => {
    this.selectedEntry = {
      date: "",
      location: "",
      duration: "",
      victories: [],
      challenges: [],
      notes: ""
    };

    let selectedLogTimestamp = parseInt(e.target.dataset.entryDate, 10);
    let journalDisplay = document.querySelector(".log-display-container");
    let pageWrapper = document.querySelector(".page-wrapper");
    let sessionLogContainer = document.querySelector("app-session-log");
    let journalDisplayOffsetTop = journalDisplay.scrollTop;
    let sessionLogScrollTop = sessionLogContainer.scrollTop;
    journalDisplay.classList.add("display-active");

    // Using the date from list of log entries, find the corresponding full entry.
    this.logEntries.map(entry => {
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
    if (!duration.includes(":")) {
      return duration;
    }

    let oldDuration = duration.split(":");

    oldDuration[0] =
      parseInt(oldDuration[0], 10) > 1
        ? (oldDuration[0] += "hrs")
        : (oldDuration[0] += "hr");

    oldDuration[0] = this.stripLeadingZero(oldDuration[0]);

    oldDuration[1] =
      parseInt(oldDuration[1], 10) > 1
        ? (oldDuration[1] += "mins")
        : (oldDuration[1] += "min");

    oldDuration[1] = this.stripLeadingZero(oldDuration[1]);

    oldDuration.pop();

    return oldDuration.join("");
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
