import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly heroMetrics = [
    { value: 'AI', label: 'agentic development focus' },
    { value: '2', label: 'live client websites' },
    { value: '8+', label: 'Syntax client implementations' },
  ];

  readonly destinationCards = [
    {
      eyebrow: 'Projects',
      title: 'Client websites and product builds',
      copy: 'Case-study style breakdowns for retrofitconstruction.ca, silvousplaitsvp.com, and selected application work.',
      route: '/personal-projects',
      accent: 'ocean',
    },
    {
      eyebrow: 'Experience',
      title: 'Syntax, SAP delivery, and internal AI tooling',
      copy: 'From Cloud ALM support to your current consultant-facing AI-agent initiative.',
      route: '/professional-experience',
      accent: 'aurora',
    },
    {
      eyebrow: 'Profile',
      title: 'Skills, certifications, and professional strengths',
      copy: 'A clearer overview of technical stack, training, education, and languages.',
      route: '/skills',
      accent: 'sunrise',
    },
  ];

  readonly ribbons = [
    'Agentic Development',
    'Angular',
    'Consultant Tooling',
    'SAP Cloud ALM',
    'Portfolio Design',
    'TypeScript',
    'Enterprise Support',
  ];
}
