import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'customers',
        loadChildren: () =>
            import('./customers/customers.module').then(
                module => module.CustomersModule
            )
    },
    { path: '', redirectTo: 'customers', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
