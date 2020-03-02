import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoComponent } from "./logo/logo.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SessionLogComponent } from "./session-log/session-log.component";
import { WorkoutComponent } from "./workout/workout.component";
import { LibraryComponent } from "./library/library.component";
import { LogDisplayComponent } from "./session-log/log-display/log-display.component";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
// for AngularFireDatabase
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    DashboardComponent,
    FooterComponent,
    LogoComponent,
    LoginFormComponent,
    SessionLogComponent,
    WorkoutComponent,
    LibraryComponent,
    LogDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
