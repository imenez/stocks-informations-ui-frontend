import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StocksDetails } from './StocksDetails';
import { StocksserviceService } from './stocksservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stocks-informations-ui';

  public stocksDetails!: StocksDetails[];

  ngOnInit(): void {
    this.getStocksDetails();
  }

  constructor(private stocksService: StocksserviceService ){}


  public getStocksDetails() {
    
    this.stocksService.getStocksDetails().subscribe(
      (response: StocksDetails[]) => {
        this.stocksDetails = response;
        console.log(this.stocksDetails);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );

  }


  public searchStocks(key: string): void {
    console.log(key);
    const results: StocksDetails[] = [];
    for (const stocksDetails of this.stocksDetails) {
      if (stocksDetails.stocksCode.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(stocksDetails);
      }
    }
    this.stocksDetails = results;
    if (results.length === 0 || !key) {
      this.getStocksDetails();
    }
  }
  


}
