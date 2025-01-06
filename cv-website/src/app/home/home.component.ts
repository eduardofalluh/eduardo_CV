import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent {
  currentLang: 'en' | 'fr' = 'en';
  isDropdownActive = false; // Tracks the state of the dropdown menu

  menuOptions = ['Personal Projects', 'Professional Experience', 'Skills'];

  

  projects = [
    {
      title: { en: 'Retrofit Construction Website', fr: 'Site Web Retrofit Construction' },
      description: {
        en: 'Developed an Angular-based website to showcase deep energy retrofit projects.',
        fr: 'Développé un site web basé sur Angular pour mettre en valeur les projets de rénovation énergétique profonde.',
      },
    },
    {
      title: { en: 'SAP Management Dashboard', fr: 'Tableau de bord SAP' },
      description: {
        en: 'Built dashboards using Power BI and SAP to streamline project management.',
        fr: 'Créé des tableaux de bord avec Power BI et SAP pour rationaliser la gestion de projet.',
      },
    },
    {
      title: { en: 'Carabins Hockey App', fr: 'Application Hockey Carabins' },
      description: {
        en: 'Developed a real-time hockey statistics application using Java and TypeScript.',
        fr: 'Développé une application de statistiques de hockey en temps réel utilisant Java et TypeScript.',
      },
    },
    {
      title: { en: 'Net Zero Retrofit', fr: 'Rénovation Net Zéro' },
      description: {
        en: 'Showcased the first Net Zero retrofit project in Quebec.',
        fr: 'Mis en valeur le premier projet de rénovation Net Zéro au Québec.',
      },
    },
    {
      title: { en: 'Cambridge Summer Program', fr: 'Programme d\'été Cambridge' },
      description: {
        en: 'Participated in an advanced summer program at the University of Cambridge.',
        fr: 'Participé à un programme d\'été avancé à l\'Université de Cambridge.',
      },
    },
  ];

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive; // Toggles the dropdown visibility
  }
}