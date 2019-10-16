import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CustomerListComponent,
        CustomerDetailComponent,
        CustomersComponent
    ],
    imports: [CommonModule, CustomersRoutingModule, SharedModule]
})
export class CustomersModule {}
