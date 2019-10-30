import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private router: Router) {}

  /** Scrolls a given element ID into focus, on the given page */
  scrollTo(elementId: string, pageUrl?: string) {
    if (pageUrl !== undefined) {
      this.router.navigate([pageUrl]).then(success => {
        if (success) {
          setTimeout(() => this._scrollToElement(elementId), 100);
        }
      });
    }

    this._scrollToElement(elementId);
  }

  private _scrollToElement(elementId: string) {
    if (elementId) {
      const section = document.getElementById(elementId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn(`Failed to find element matching #${elementId || ''}`);
      }
    }
  }
}
