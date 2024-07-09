import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IBreadCrumb } from '../../models/shared';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {
  @ViewChild('ol', { static: true }) orderedList!: ElementRef<HTMLElement>
  @ViewChild('button', { static: true }) button!: ElementRef<HTMLButtonElement>
  @Input() breadCrumbs: IBreadCrumb[] = [];
  @Input() btnText: string = '';
  @Input() btnIcon: string = '';
  @Output() btnEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() btnVisibility: boolean = true;

  openAddDialog() {
    this.btnEvent.emit();
  }

}
