import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ServiceBudgetService } from '../service-budget.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() subTotalBudget: number;
  @Output() onTotalEvent = new EventEmitter<number>(); 

  webSelected: FormGroup = new FormGroup({
    numberPages: new FormControl('1', [Validators.required, Validators.min(1)]),
    numberLanguages: new FormControl('1', [Validators.required, Validators.min(1)]),
    
  });

  constructor(private _budgetService : ServiceBudgetService) { 
  
  }

  ngOnInit(): void{

  }
  ngAfterViewInit(): void  {
    
    this.webSelected.get('numberPages')!.valueChanges.subscribe(pagesNumber =>  {
      let languagesNumber = this.webSelected.get('numberLanguages')!.value;
      this.onTotalEvent.emit(this._budgetService.calculateTotal(this.subTotalBudget, pagesNumber, languagesNumber));
    });
    this.webSelected.get('numberLanguages')!.valueChanges.subscribe( languagesNumber =>  {
      let pagesNumber = this.webSelected.get('numberPages')!.value;
      this.onTotalEvent.emit(this._budgetService.calculateTotal(this.subTotalBudget, pagesNumber,languagesNumber));
      
    });
  }
}
