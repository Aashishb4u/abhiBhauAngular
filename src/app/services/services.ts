import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let headers = new HttpHeaders({'Content-Type': 'application/json', 'user-key': 'c00b852921586ecdcc6f9631dd4ff178'});

@Injectable()
export class DemoService {

  constructor(private http:HttpClient) {}

  getData() {
    let url = 'https://developers.zomato.com/api/v2.1/search?q=pune';
    //let headers = this.createHeader();
    return this.http.get(url, {headers: headers})
      .map(this.extractResponse)
      .catch(this.handleError.bind(this));
  }

  extractResponse(res: Response) {
    let body = res;
    return body;
  }

  public handleError(error: Response): Observable<any> {
    let result = error;
    return Observable.throw(result ||  'Server error');
  }
}
