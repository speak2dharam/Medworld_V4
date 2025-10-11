import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterModule,NgbCollapse,NgbDropdownModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
isSticky = false;
  private lastScroll = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;
    
    if (currentScroll < this.lastScroll) {
      // Scrolling up - show sticky header
      this.isSticky = true;
    } else {
      // Scrolling down - hide sticky header
      this.isSticky = false;
    }

    this.lastScroll = currentScroll;
  }

  isMenuCollapsed = true;
    openDropdown: string | null = null;
    constructor(){}
    
    toggleDropdown(dropdown: string) {
      this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
    }
    // Listens for clicks anywhere in the document
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      const targetElement = event.target as HTMLElement;
  
      // If the clicked element is NOT inside a dropdown, close the dropdown
      if (!targetElement.closest('.dropdown')) {
        this.openDropdown = null;
      }
    }
}
