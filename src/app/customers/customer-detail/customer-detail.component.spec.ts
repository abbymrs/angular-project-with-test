import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Params } from '@angular/router';
import { of } from 'rxjs';

import { CustomerDetailComponent } from './customer-detail.component';

describe('CustomerDetailComponent', () => {
    let component: CustomerDetailComponent;
    let fixture: ComponentFixture<CustomerDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomerDetailComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({
                            get: () => {
                                return { id: 1 };
                            }
                        })
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
