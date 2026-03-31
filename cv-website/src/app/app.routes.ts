import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'overview' } },
  { path: 'personal-projects', component: PersonalProjectsComponent, data: { animation: 'projects' } },
  { path: 'professional-experience', component: ProfessionalExperienceComponent, data: { animation: 'experience' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'profile' } },
  { path: 'education', redirectTo: 'skills', pathMatch: 'full' },
  { path: 'extracurricular', redirectTo: 'skills', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
