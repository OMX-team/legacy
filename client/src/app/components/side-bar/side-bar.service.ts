import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service'
@Injectable({
  providedIn: 'root',
})
export class SideBarService {

  constructor(private http: HttpService) {
  }
  search(query, usedfor) {
    return this.http.getRequest(`/search?keyword=${query}&usedfor=${usedfor}`)
  }
}
