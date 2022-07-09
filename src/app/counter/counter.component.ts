import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {


  _inputValue: number = 0;


  writeValue(value: any) {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }
  
  propagateChange = (_: any) => {};
  registerOnTouched(): void {};

  registerOnChange( fn : any) {
    this.propagateChange = fn ;
  }

  get inputValue() {
    return this._inputValue;
  }

  set inputValue(val) {
    this._inputValue = val;
    this.propagateChange(this._inputValue);
  }

  decrement(): void {
     if (this.inputValue < 2) { return }
    this.inputValue--;
  }

  increment(): void {
   
    this.inputValue++;
  }

}
