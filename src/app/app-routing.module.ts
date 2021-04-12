import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { ProjectsComponent } from './projects/projects.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';
import { SkillsComponent } from './skills/skills.component'
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'detail/:id', component: SkillsDetailComponent },
  { path: 'projectdetail/:id', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
