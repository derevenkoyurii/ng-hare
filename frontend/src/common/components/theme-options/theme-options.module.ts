import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DirectivesModule } from 'src/common/directives';
import { SidebarModule } from 'src/common/components/sidebar/sidebar.module';
import { MaterialModule } from 'src/common/material.module';

import { ThemeOptionsComponent } from './theme-options.component';

@NgModule({
  declarations: [ThemeOptionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    MaterialModule,

    DirectivesModule,
    SidebarModule
  ],
  exports: [ThemeOptionsComponent]
})
export class ThemeOptionsModule {}
