import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  data = new Subject<any>();
  dataSource = this.data.asObservable();
  constructor() { }

  
}
