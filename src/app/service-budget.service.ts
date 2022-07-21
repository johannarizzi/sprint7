import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBudgetService {

  constructor() {
   }
   subTotalBudget :number = 0;
   totalBudget :number = this.subTotalBudget;

   computeSubTotal(selected: boolean, price: number) {
    if (selected) {
      this.subTotalBudget += price;
      this.totalBudget += price;
    } else {
      this.subTotalBudget -= price;
      this.totalBudget -= price;
    }
  }

  showTotal(total: number) {
    this.totalBudget = total;
  
  }

  calculateTotal(subTotalBudget: number, pagesNumber: number, languagesNumber: number): number {
    
       
    if (pagesNumber <= 0 && languagesNumber <= 0) {
      return subTotalBudget;
    }
    
    return (subTotalBudget -30) + (pagesNumber * languagesNumber * 30 );
  }
}

