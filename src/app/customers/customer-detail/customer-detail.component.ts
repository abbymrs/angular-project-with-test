import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.less']
})
export class CustomerDetailComponent implements OnInit {
    customerId = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.customerId = params.get('id');
        });
    }
}
