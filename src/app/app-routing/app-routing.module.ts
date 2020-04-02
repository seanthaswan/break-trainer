import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "../landing/landing.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SessionLogComponent } from "../session-log/session-log.component";
import { WorkoutComponent } from "../workout/workout.component";
import { LibraryComponent } from "../library/library.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "app",
    component: DashboardComponent,
    children: [
      { path: "session-log", component: SessionLogComponent },
      { path: "train", component: WorkoutComponent },
      { path: "move-library", component: LibraryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
