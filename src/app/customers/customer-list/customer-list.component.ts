import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit {
    customers = [
        {
            name: 'abby',
            id: 1
        },
        {
            name: 'jane',
            id: 2
        },
        {
            name: 'cici',
            id: 3
        }
    ];

    constructor(private router: Router) {}

    ngOnInit() {}

    goDetail(customer: any) {
        this.router.navigate([`/customers/${customer.id}`]);
    }
}
