import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  title: string = "Credit-List";
  credit: Credit[]=[];
  jr: JsonResponse;
  
    constructor(private creditSvc: CreditService) { }
  
    ngOnInit() {
      console.log("Calling credit List....");
      this.creditSvc.list().subscribe(jresp =>{
        this.jr = jresp;
        this.credit = this.jr.data as Credit[];
        console.log(this.credit)
      }
        
        )
    }

}
