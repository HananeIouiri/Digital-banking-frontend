import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetails } from '../models/account.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  public getAccount(accountId : string, page : number, size : number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost+"/accounts/"+accountId+"/history?page="+page+"&size="+size);
  }

  public debit(accountId : string, amount : number, description : string){
    let data = {accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/debit", data);
  }

  public credit(accountId : string, amount : number, description : string){
    let data = {accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/credit", data);
  }
  
  public transfer(accountSource: string,accountDestination: string, amount : number, description : string){
    let data = {accountSource, accountDestination, amount, description }
    return this.http.post(environment.backendHost+"/accounts/transfer", data);
  }
}
