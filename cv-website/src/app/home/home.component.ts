import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') particleCanvas!: ElementRef<HTMLCanvasElement>;

  currentLang: 'en' | 'fr' = 'en';
  isDropdownActive = false;
  typedText = '';

  menuOptions = [
    { label: 'Personal Projects', route: '/personal-projects' },
    { label: 'Professional Experience', route: '/professional-experience' },
    { label: 'Skills', route: '/skills' },
    { label: 'Education', route: '/education' },
    { label: 'Extracurricular', route: '/extracurricular' },
  ];

  stats = [
    { num: '5+', label: { en: 'Projects', fr: 'Projets' } },
    { num: '3+', label: { en: 'Languages', fr: 'Langages' } },
    { num: '2+', label: { en: 'Years Coding', fr: 'Ans de Code' } },
    { num: '∞', label: { en: 'Passion', fr: 'Passion' } },
  ];

  projects = [
    {
      title: { en: 'Retrofit Construction Website', fr: 'Site Retrofit Construction' },
      description: {
        en: 'Angular-based website showcasing deep energy retrofit projects with a modern UI.',
        fr: 'Site Angular pour mettre en valeur les projets de rénovation énergétique profonde.',
      },
      tags: ['Angular', 'TypeScript', 'CSS'],
    },
    {
      title: { en: 'SAP Management Dashboard', fr: 'Tableau de Bord SAP' },
      description: {
        en: 'Interactive dashboards using Power BI and SAP to streamline project management workflows.',
        fr: 'Tableaux de bord avec Power BI et SAP pour rationaliser la gestion de projet.',
      },
      tags: ['Power BI', 'SAP', 'Data Analytics'],
    },
    {
      title: { en: 'Carabins Hockey App', fr: 'Application Hockey Carabins' },
      description: {
        en: 'Real-time hockey statistics application built with Java and TypeScript for the UdeM team.',
        fr: "Application de statistiques de hockey en temps réel avec Java et TypeScript.",
      },
      tags: ['Java', 'TypeScript', 'Real-time'],
    },
    {
      title: { en: 'Net Zero Retrofit', fr: 'Rénovation Net Zéro' },
      description: {
        en: "Quebec's first Net Zero retrofit project — featured on a dedicated web platform.",
        fr: 'Premier projet de rénovation Net Zéro au Québec présenté sur une plateforme web.',
      },
      tags: ['Sustainability', 'Angular', 'Web'],
    },
    {
      title: { en: 'Cambridge Summer Program', fr: "Programme d'Été Cambridge" },
      description: {
        en: 'Advanced summer program at the University of Cambridge focused on Python and Java algorithms.',
        fr: "Programme d'été avancé à l'Université de Cambridge en Python et algorithmes Java.",
      },
      tags: ['Python', 'Java', 'Algorithms'],
    },
  ];

  heroTags = ['AI', 'Cybersecurity', 'Full Stack', 'Game Dev'];

  private particles: Particle[] = [];
  private animationId = 0;
  private observer!: IntersectionObserver;
  private typingTimeout: ReturnType<typeof setTimeout> | null = null;
  private resizeHandler!: () => void;

  private readonly taglines = {
    en: ["Building Tomorrow's Software", 'AI & Cybersecurity Enthusiast', 'Full Stack Developer', 'Game Dev Passionate'],
    fr: ['Construire le Logiciel de Demain', "Passionné d'IA & Cybersécurité", 'Développeur Full Stack', 'Passionné de Jeux Vidéo'],
  };
  private taglineIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngAfterViewInit() {
    this.initParticles();
    this.initScrollReveal();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    if (this.observer) this.observer.disconnect();
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
    if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
  }

  private startTypingAnimation() {
    const lines = this.taglines[this.currentLang];
    const current = lines[this.taglineIndex];

    if (this.isDeleting) {
      this.typedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 45 : 90;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.taglineIndex = (this.taglineIndex + 1) % lines.length;
      delay = 400;
    }

    this.typingTimeout = setTimeout(() => this.startTypingAnimation(), delay);
  }

  private initParticles() {
    const canvas = this.particleCanvas.nativeElement;
    const ctx = canvas.getContext('2d')!;

    this.resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);

    this.particles = [];
    for (let i = 0; i < 100; i++) {
      const colorRoll = Math.random();
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        color: colorRoll > 0.7 ? '#00f5ff' : colorRoll > 0.4 ? '#7c3aed' : '#ffffff',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.stroke();
          }
        }
      }

      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      this.animationId = requestAnimationFrame(draw);
    };
    draw();
  }

  private initScrollReveal() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08 }
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
    }, 300);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.taglineIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
    this.startTypingAnimation();
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }
}
