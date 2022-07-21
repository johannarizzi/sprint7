import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceBudgetService } from '../service-budget.service';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 totalBudget : number = 0;
 subTotalBudget : number = 0;
 webSelected: boolean = false;

  servicesForm: FormGroup = new FormGroup({
    web: new FormControl(),
    seo: new FormControl(),
    sem: new FormControl()
  });
  

  constructor( private _budgetService : ServiceBudgetService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {  
    
  }

  ngOnInit(): void {
    this.servicesForm.get('web')!.valueChanges.subscribe(selected => {
      this.webSelected = selected;
      this._budgetService.computeSubTotal(selected, 500 + 30);
      this.updateBugdet();
     
    });
    this.servicesForm.get('seo')!.valueChanges.subscribe(selected => {
      this._budgetService.computeSubTotal(selected, 300);
      this.updateBugdet();
    });
    this.servicesForm.get('sem')!.valueChanges.subscribe(selected => {
      this._budgetService.computeSubTotal(selected, 200);
      this.updateBugdet();
    });

  }

 updateBugdet(): void {
    this.totalBudget = this._budgetService.totalBudget;
    this.subTotalBudget = this._budgetService.subTotalBudget;
  
  }
  
  showTotal(value:number): void {
    this._budgetService.showTotal(value);
    this.updateBugdet();
  }
 
}
