import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAcceptPersianNumber]'
})
export class AcceptPersianNumberDirective {
  perArNumber: Map<string, string> = new Map<string, string>();
  input: string;
  element: HTMLInputElement;

  constructor(private el: ElementRef, private control: NgControl) {
    this.initialize();
    this.element = this.el.nativeElement;
    this.element.value = '';
  }

  @HostListener('input')
  onChange(): any {
    let valueToTransform = this.el.nativeElement.value;

    this.perArNumber.forEach((value: string, key: string) => {
      const shouldBeReplaced = new RegExp(key, 'g');
      valueToTransform = valueToTransform.replace(shouldBeReplaced, value);

      this.control?.control?.setValue(valueToTransform);
    });
  }

  initialize(): any {
    this.perArNumber.set('\u06F0', '0');
    this.perArNumber.set('\u06F1', '1');
    this.perArNumber.set('\u06F2', '2');
    this.perArNumber.set('\u06F3', '3');
    this.perArNumber.set('\u06F4', '4');
    this.perArNumber.set('\u06F5', '5');
    this.perArNumber.set('\u06F6', '6');
    this.perArNumber.set('\u06F7', '7');
    this.perArNumber.set('\u06F8', '8');
    this.perArNumber.set('\u06F9', '9');

    this.perArNumber.set('\u0660', '0');
    this.perArNumber.set('\u0661', '1');
    this.perArNumber.set('\u0662', '2');
    this.perArNumber.set('\u0663', '3');
    this.perArNumber.set('\u0664', '4');
    this.perArNumber.set('\u0665', '5');
    this.perArNumber.set('\u0666', '6');
    this.perArNumber.set('\u0667', '7');
    this.perArNumber.set('\u0668', '8');
    this.perArNumber.set('\u0669', '9');
  }
}
