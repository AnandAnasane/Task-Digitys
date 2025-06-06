
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

declare var bootstrap: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  darkMode = false;

  ngOnInit() {
    const stored = localStorage.getItem('darkMode');
    this.darkMode = stored === 'true';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
  }


  // To hide sidebar in mobil View
   closeOffcanvas() {
    const offcanvasEl = document.getElementById('sidebarOffcanvas');
    if (offcanvasEl) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }
}


