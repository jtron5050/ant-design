import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from "ng-zorro-antd/table";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, FilterOutline, ArrowDownOutline } from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [ UserOutline, FilterOutline, ArrowDownOutline ];

@NgModule({
    imports: [
        NzIconModule.forRoot(icons),

    ],
  exports: [
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDrawerModule,
    NzDropDownModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzProgressModule,
    NzTableModule,
    NzSelectModule,
    NzBadgeModule,
    NzSpaceModule,
    NzStatisticModule,
    NzDividerModule,
    NzIconModule
  ]
})
export class AntDesignModule { }
