import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mgm-nav-menu',
  templateUrl: './mgm-nav-menu.component.html',
  styleUrls: ['./mgm-nav-menu.component.scss'],
})
export class MgmNavMenuComponent implements OnInit {
  constructor(private router: Router) {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Questions',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Q1',
            command: () => {
              this.router.navigate(['/question-one']);
            },
          },
          {
            label: 'Q2',
            command: () => {
              this.router.navigate(['/question-two']);
            },
          },
          {
            label: 'Q3',
            command: () => {
              this.router.navigate(['/question-three']);
            },
          },
          {
            label: 'Q4',
            command: () => {
              this.router.navigate(['/question-four']);
            },
          },
          {
            label: 'Q5',
            command: () => {
              this.router.navigate(['/question-five']);
            },
          },
          {
            label: 'Q6',
            command: () => {
              this.router.navigate(['/question-six']);
            },
          },
        ],
      },
    ];
  }
}
