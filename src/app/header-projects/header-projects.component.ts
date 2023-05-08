import { Component } from '@angular/core';

@Component({
  selector: 'app-header-projects',
  templateUrl: './header-projects.component.html',
  styleUrls: ['./header-projects.component.css'],
})
export class HeaderProjectsComponent {
  isHidden = 'hidden';

  showModal() {
    if (this.isHidden === 'block') this.isHidden = 'hidden';
    else this.isHidden = 'block';
  }
}
