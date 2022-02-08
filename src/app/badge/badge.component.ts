import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
     <ng-container>
      <span
        class="ant-badge-status-dot ant-badge-status-success"
        [style.background]="'red'">
      </span>
    </ng-container>
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
