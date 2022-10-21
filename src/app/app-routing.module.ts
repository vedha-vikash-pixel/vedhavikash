import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HiComponent } from './hi/hi.component';
import { RoadComponent } from './road/road.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
    { path:'' , redirectTo:'vedhavikash' ,pathMatch:'full'},
    { path:'vedhavikash' ,component:HiComponent},
    { path:'aboutme' ,component:AboutmeComponent},
    { path:'contact' ,component:ContactComponent},
    { path:'path' ,component:RoadComponent},
    { path:'skills' ,component:SkillsComponent},
    { path:'**' ,component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
