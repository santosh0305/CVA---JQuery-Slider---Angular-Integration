import { Component, Directive, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'ngx-jquery-slider',
  template: `
      <div #location></div>
  `,
  styles: ['div {width: 100px}']
})
export class NgxJquerySliderComponent {
  @ViewChild('location') location;
  widget;

  ngOnInit() {
    this.widget = $(this.location.nativeElement).slider();
  }
}
