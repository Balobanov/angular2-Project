import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  @HostListener('click') clicked(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') mouseLeaved(){
    this.isOpen = false;
  }

  @HostBinding('class.open') get isOpened(){
    return this.isOpen;
  }

  private isOpen: boolean = false;

}
