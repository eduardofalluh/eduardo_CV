import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentLang: 'en' | 'fr' = 'en';

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
  ];

  ngOnInit() {
    console.log('Projects:', this.projects);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
  }
}