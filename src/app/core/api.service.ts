import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = '/api/';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getAuth(): Observable<any> {
        return this.http.get(`${baseUrl}auth`);
    }
    getSearchResult(url: string): Observable<any> {
        return this.http.post(`${baseUrl}search`, { url });
    }
}
