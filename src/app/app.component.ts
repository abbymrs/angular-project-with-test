import { Component, OnInit } from '@angular/core';

import { ApiService } from './core/service/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    searchKeyWord = '';
    result = {
        url: '',
        message: ''
    };
    authObj = {
        status: 0,
        message: ''
    };

    constructor(public apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getAuth().subscribe(res => {
            this.authObj = res;
        });
    }

    onSearch() {
        this.apiService.getSearchResult(this.searchKeyWord).subscribe(res => {
            this.result = res;
        });
    }
}
