import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
        children: [
            {
                path: ':id',
                component: CustomerDetailComponent
            },
            {
                path: '',
                component: CustomerListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {}
