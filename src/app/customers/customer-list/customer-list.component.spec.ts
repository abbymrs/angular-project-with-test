import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerListComponent } from './customer-list.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

describe('CustomerListComponent', () => {
    let component: CustomerListComponent;
    let fixture: ComponentFixture<CustomerListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomerListComponent, FilterPipe],
            imports: [RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
