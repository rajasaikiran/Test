import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewuserComponent} from './viewuser/viewuser.component'

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"viewuser/:userid",component:ViewuserComponent},
  {path: "",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
