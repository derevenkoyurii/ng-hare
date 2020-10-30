import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-carded-right-sidebar-tabbed-2',
  templateUrl: './right-sidebar-tabbed-2.component.html',
  styleUrls: ['./right-sidebar-tabbed-2.component.scss']
})
export class CardedRightSidebarTabbed2Component {
  /**
     * Constructor
     *
     * @param _sidebarService

*/
  constructor(private _sidebarService: CommonSidebarService) {}
  /**
   * Toggle sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}