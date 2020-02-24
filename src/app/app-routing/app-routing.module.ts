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
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "logs",
    component: SessionLogComponent
  },
  {
    path: "workout",
    component: WorkoutComponent
  },
  {
    path: "library",
    component: LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
