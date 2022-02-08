import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  template: `
    <div *ngFor="let i of myArray">
    <nz-select [style.width.px]="220">
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>
        <nz-option [nzValue]="1" nzLabel="Hellowere" ></nz-option>

    </nz-select>

</div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorComponent implements OnInit {
  myArray = Array(200).fill('hello');
  
  constructor() { }

  ngOnInit(): void {
  }

}
