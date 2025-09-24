import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollTopComponent } from "./shared/scroll-top/scroll-top";
import { FooterComponent } from "./shared/scroll-top/footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ScrollTopComponent, FooterComponent]
})
export class AppComponent {}