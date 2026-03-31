import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tech: string[];
  href?: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
}

interface SyntaxItem {
  client: string;
  sector: string;
  period: string;
  summary: string;
  bullets: string[];
}

interface FocusItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly currentYear = new Date().getFullYear();

  scrollProgress = 0;
  heroOffset = 0;
  activeSection = 'top';
  pointerX = 0;
  pointerY = 0;

  readonly navItems: NavItem[] = [
    { id: 'work', label: 'Work' },
    { id: 'focus', label: 'Focus' },
    { id: 'syntax', label: 'Syntax' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly stats: StatItem[] = [
    { value: '2', label: 'live client websites shipped' },
    { value: '8+', label: 'Syntax SAP implementations supported' },
    { value: 'AI', label: 'current main focus: internal consultant agent' },
    { value: '3', label: 'working languages spoken' },
    { value: '2024', label: 'Polytechnique software engineering degree' }
  ];

  readonly expertise = [
    'Angular',
    'TypeScript',
    'SAP Cloud ALM',
    'SAP S/4HANA',
    'SAPUI5',
    'Power BI',
    'Node.js',
    'Express',
    'SQL',
    'MongoDB',
    'Java',
    'Python',
    'Grafana',
    'InfluxDB',
    'Figma',
    'AWS',
    'AI Agents',
    'Agentic Workflows',
    'LLM Prototyping',
  ];

  readonly marqueeItems = [
    'Agentic Development',
    'Angular',
    'SAP Cloud ALM',
    'AI Consultant Tooling',
    'TypeScript',
    'Enterprise UX',
    'Node.js',
    'System Enablement',
  ];

  readonly focusCards: FocusItem[] = [
    {
      title: 'Agentic Development',
      description: 'My main current focus is building an internal AI agent for Syntax consultants so they can work faster, find information quicker, and interact with internal workflows more effectively.',
    },
    {
      title: 'Consultant Enablement',
      description: 'I am concentrating on practical internal tooling, with emphasis on consultant usability, clarity, and real productivity impact rather than experimentation alone.',
    },
    {
      title: 'Enterprise Readiness',
      description: 'This work builds on my SAP implementation background, combining system knowledge, process awareness, and software craftsmanship into agentic products for internal use.',
    },
  ];

  readonly featuredProjects: FeaturedProject[] = [
    {
      title: 'retrofitconstruction.ca',
      category: 'Construction website',
      description:
        'Designed and developed a polished Angular website to showcase deep-energy retrofit projects and strengthen the company’s digital presence.',
      outcome: 'Turned project credibility into a clearer, more professional sales and portfolio experience.',
      tech: ['Angular', 'TypeScript', 'Responsive UI'],
      href: 'https://retrofitconstruction.ca',
    },
    {
      title: 'silvousplaitsvp.com',
      category: 'Event platform',
      description:
        'Built a record-label website with RSVP and payment flow support, blending strong visual direction with a practical booking funnel.',
      outcome: 'Combined branding, event communication, and transaction flow in one streamlined product.',
      tech: ['Angular', 'Node.js', 'Express', 'SQL'],
      href: 'https://silvousplaitsvp.com',
    },
    {
      title: 'Carabins Hockey App',
      category: 'Sports analytics app',
      description:
        'Created an Android application for the Carabins hockey team to track player statistics and team performance.',
      outcome: 'Translated raw game data into a usable internal performance tool.',
      tech: ['Java', 'TypeScript', 'MySQL', 'XML'],
    },
  ];

  readonly experiences: ExperienceItem[] = [
    {
      company: 'Retrofit Construction',
      role: 'Project Manager',
      period: 'May 2024 - Aug 2024',
      location: 'Montreal',
      summary: 'Led digital workflow improvements for a deep-energy retrofit business while also building its public-facing website.',
      bullets: [
        'Developed the company website in Angular to present retrofit projects and strengthen online credibility.',
        'Implemented Buildertrend-based project management workflows to improve budgeting and operational tracking.',
        'Aligned construction operations with digital tools and supported internal adoption across the team.',
      ],
    },
    {
      company: 'Projexia',
      role: 'Software Developer',
      period: 'May 2022 - Aug 2022',
      location: 'Montreal',
      summary: 'Worked on SAP-related client tools, documentation, and dashboards with a focus on workflow clarity and business needs.',
      bullets: [
        'Supported debugging of SAP MPRS alongside senior developers.',
        'Built training documentation for Grafana and InfluxDB data visualization workflows.',
        'Contributed to a time-tracking solution and interactive dashboards using Power BI and SAP.',
      ],
    },
    {
      company: 'Kaloom',
      role: 'Data Analyst',
      period: 'May 2021 - Aug 2021',
      location: 'Montreal',
      summary: 'Used Python and observability tools to extract and visualize network-related data from client systems.',
      bullets: [
        'Developed Python scripts to retrieve data directly from client servers.',
        'Created Grafana and InfluxDB dashboards to visualize network flow fluctuations.',
      ],
    },
  ];

  readonly syntaxProjects: SyntaxItem[] = [
    {
      client: 'H&B',
      sector: 'Retail',
      period: 'May 2025',
      summary: 'Supported SAP Cloud ALM onboarding with strong emphasis on secure access management.',
      bullets: [
        'Granted client access through IAS Prod and IAS Test/Non-Prod environments.',
        'Monitored and managed access requests to keep enablement secure and timely.',
      ],
    },
    {
      client: 'Sciens',
      sector: 'Fire & Life Safety Systems',
      period: 'May 2025',
      summary: 'Helped prepare SAP Cloud ALM testing readiness for distributed data applications.',
      bullets: [
        'Uploaded test scripts for each DDA in SAP Cloud ALM.',
        'Supported testing consistency and alignment with client validation cycles.',
      ],
    },
    {
      client: 'Toyota',
      sector: 'Automotive',
      period: 'Jun 2025',
      summary: 'Provided user access and configuration support during SAP implementation activities.',
      bullets: [
        'Provisioned access for users in the TDD system.',
        'Onboarded users into SAP Central Business Configuration with correct role assignment.',
      ],
    },
    {
      client: 'MTS',
      sector: 'Telecommunications',
      period: 'Aug 2025',
      summary: 'Supported a large-scale SAP setup covering Cloud ALM, starter systems, and central configuration.',
      bullets: [
        'Onboarded up to 125 users into SAP Cloud ALM and starter systems.',
        'Created test cases for DDAs to support project validation activities.',
      ],
    },
    {
      client: 'Gymshark',
      sector: 'Retail / E-Commerce',
      period: 'Jun 2025',
      summary: 'Enabled client understanding across CALM, starter, and CBC environments.',
      bullets: [
        'Guided the client through SAP environment structure and workflows.',
        'Explained system navigation to improve client self-sufficiency.',
      ],
    },
    {
      client: 'Progress Lighting',
      sector: 'Manufacturing',
      period: 'Jul 2025',
      summary: 'Executed logistics support work tied to SAP freight order handling.',
      bullets: [
        'Created freight orders using client-specified instructions.',
        'Ensured accurate and timely execution aligned with supply chain needs.',
      ],
    },
    {
      client: 'NHL',
      sector: 'Sports & Entertainment',
      period: 'Jul 2025',
      summary: 'Supported early SAP implementation readiness for a multi-solution deployment.',
      bullets: [
        'Set up user access in CALM, starter, and CBC environments.',
        'Coordinated with the client to resolve access requirements and authorizations.',
      ],
    },
    {
      client: 'Robindale',
      sector: 'Energy',
      period: 'Jun 2025',
      summary: 'Assisted version-upgrade validation work through new Cloud ALM test coverage.',
      bullets: [
        'Uploaded updated test scripts for DDAs as part of the SAP 2508 upgrade.',
        'Helped maintain release-readiness coverage for validation activities.',
      ],
    },
  ];

  readonly education = [
    {
      title: 'Bachelor in Software Engineering',
      school: 'Ecole Polytechnique de Montreal',
      meta: 'Montreal • 2020 - 2024',
    },
    {
      title: 'Summer Program in Programming',
      school: 'University of Cambridge',
      meta: 'Cambridge, England • 2017',
    },
  ];

  readonly certifications = [
    'Transforming for Success: Solution Transformation with SAP Cloud ALM - 2025',
    'Managing SAP S/4HANA Cloud Public Edition Projects - 2025',
  ];

  readonly training = [
    'Introduction to programming in Python and Java with a Harvard professor - 2017',
    'SAP environment training during first weeks at Projexia - 2022',
  ];

  readonly languages = ['French', 'English', 'Portuguese'];

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.handleScroll();
    this.initializeRevealObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.handleScroll();
  }

  @HostListener('window:mousemove', ['$event'])
  onWindowMouseMove(event: MouseEvent): void {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    this.pointerX = x;
    this.pointerY = y;
  }

  scrollToSection(sectionId: string): void {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  trackByLabel(_: number, item: string): string {
    return item;
  }

  trackByNav(_: number, item: NavItem): string {
    return item.id;
  }

  get heroDeviceTransform(): string {
    const rotateX = this.pointerY * -10;
    const rotateY = this.pointerX * 12;
    const translateY = this.heroOffset;
    return `perspective(1600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px)`;
  }

  get ambientTransformOne(): string {
    return `translate3d(${this.pointerX * 30}px, ${this.pointerY * 24}px, 0)`;
  }

  get ambientTransformTwo(): string {
    return `translate3d(${this.pointerX * -26}px, ${this.pointerY * -18}px, 0)`;
  }

  private handleScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

    this.scrollProgress = Math.min(scrollTop / maxScroll, 1);
    this.heroOffset = Math.min(scrollTop * 0.18, 120);
  }

  private initializeRevealObserver(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }

          const sectionId = entry.target.getAttribute('data-section');
          if (entry.isIntersecting && sectionId) {
            this.activeSection = sectionId;
          }
        });
      },
      {
        threshold: [0.2, 0.55],
        rootMargin: '-10% 0px -25% 0px',
      }
    );

    document.querySelectorAll('.reveal, .track-section').forEach(element => {
      this.observer?.observe(element);
    });
  }
}
