import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              inset: 0,
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({
              opacity: 0,
              transform: 'translate3d(0, 48px, 0) scale(0.985)',
              filter: 'blur(10px)',
            }),
          ],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '650ms cubic-bezier(0.22, 1, 0.36, 1)',
                style({
                  opacity: 0,
                  transform: 'translate3d(0, -32px, 0) scale(1.01)',
                  filter: 'blur(12px)',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              animate(
                '850ms cubic-bezier(0.22, 1, 0.36, 1)',
                style({
                  opacity: 1,
                  transform: 'translate3d(0, 0, 0) scale(1)',
                  filter: 'blur(0px)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  readonly navItems = [
    { label: 'Overview', link: '/' },
    { label: 'Projects', link: '/personal-projects' },
    { label: 'Experience', link: '/professional-experience' },
    { label: 'Profile', link: '/skills' },
  ];

  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? 'root';
  }
}
