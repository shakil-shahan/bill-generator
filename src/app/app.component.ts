import { Component } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bill Generator';

  displayedColumns: string[] = ['item-name', 'price', 'quantity', 'sub-total'];
  transactions: Transaction[] = [
    {item: 'Apple', cost: 150},
    {item: 'Banana', cost: 8},
    {item: 'Watermelon', cost: 220},
    {item: 'Orange', cost: 200},
    {item: 'Jackfruit', cost: 350},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
