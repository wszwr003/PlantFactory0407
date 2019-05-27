import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSerivce {

    state :boolean =false;
  constructor() {
  }


  ngOnInit() {
  }

  add(): Observable<any> {
    console.log(this.state);
    return of(111);
  }

}
