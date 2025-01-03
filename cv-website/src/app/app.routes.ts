import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Root URL displays HomeComponent
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'extracurricular', component: ExtracurricularComponent },
];