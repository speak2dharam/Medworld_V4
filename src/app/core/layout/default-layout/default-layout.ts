import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { CanonicalService } from '../../services/canonical.service';
import { CANONICAL_URLS } from '../../services/canonical-urls';

@Component({
  selector: 'app-default-layout',
  imports: [Header,Footer,RouterOutlet],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css'
})
export class DefaultLayout {
  private readonly canonicalService = inject(CanonicalService);
  private readonly router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe((event) => this.updateCanonicalURL(event.urlAfterRedirects));
  }

  private updateCanonicalURL(url: string): void {
    const path = this.normalizePath(url);
    const canonicalURL = CANONICAL_URLS[path];

    if (canonicalURL) {
      this.canonicalService.setCanonicalURL(canonicalURL);
    } else {
      this.canonicalService.removeCanonicalURL();
    }
  }

  private normalizePath(url: string): string {
    const [pathWithoutQuery] = url.split(/[?#]/);
    const normalizedPath = pathWithoutQuery.replace(/\/+$/, '');

    return normalizedPath || '/';
  }
}
