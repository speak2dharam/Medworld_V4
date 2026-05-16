import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setCanonicalURL(url: string): void {
    let link = this.document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  removeCanonicalURL(): void {
    const link = this.document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    link?.remove();
  }
}
