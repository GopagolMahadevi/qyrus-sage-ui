import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SageService {

  constructor(private http: HttpClient) { }

  getAuthUrl(data: any) {
    return this.http.post(environment.BASEURL_Sage_Service + 'auth/api/authenticateWithUserInfo', data);
  }

  getListTests(userEmail: string) {
    return this.http.get(environment.BASEURL_Sage_data_Service + 'api/list_tests?username=' + userEmail);
  }
}
