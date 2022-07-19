import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterComponent,
      multi: true
    }
  ]
})
export class CounterComponent implements OnInit, ControlValueAccessor {
  

  _inputValue: number = 0;
  disabled = false;

  constructor() { 
  
  }
  ngOnInit(): void{

  }

  writeValue(obj: any) {
    if (obj != undefined) {
      this.inputValue = obj;
    }
  }
  registerOnChange( fn : any) {
    this.propagateChange = fn ;
  }
  propagateChange = (fn: any) => {};

  registerOnTouched(): void {};
 
  setDisabledState (isDisabled: boolean):  void  {
    this.disabled = isDisabled;
  }

  get inputValue() {
    return this._inputValue;
  }

  set inputValue(value) {
    this._inputValue = value;
    this.propagateChange(this._inputValue);
  }

  subtract(): void {
     if (this.inputValue < 2) { return }
    this.inputValue--;
  }

  add(): void {
    this.inputValue++;
  }

}
