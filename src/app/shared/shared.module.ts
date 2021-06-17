import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MgmNavMenuComponent } from './mgm-nav-menu/mgm-nav-menu.component';

@NgModule({
  declarations: [MgmNavMenuComponent],
  imports: [CommonModule, MenubarModule],
  exports: [MgmNavMenuComponent],
})
export class SharedModule {}
