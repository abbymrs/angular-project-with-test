import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

const basicUrl = '/api';
let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
let httpMOck: HttpTestingController;

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NgZorroAntdModule,
                HttpClientModule,
                HttpClientTestingModule
            ],
            declarations: [AppComponent],
            providers: [{ provide: NZ_I18N, useValue: en_US }]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        httpMOck = TestBed.get(HttpTestingController);
    }));

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should update authObj correctly when call getAuth api', async(() => {
        component.getAuth(); // invoke api service

        // mock backend api response data
        httpMOck
            .expectOne({
                method: 'GET',
                url: `${basicUrl}/auth`
            })
            .flush({
                message: 'ok',
                status: 200
            });

        expect(component.authObj.message).toBe('ok');
        expect(component.authObj.status).toBe(200);
    }));

    it('should update search result correctly when click on search button', async(() => {
        component.searchKeyWord = 'test';
        component.onSearch(); // invoke api service
        fixture.detectChanges();

        // mock backend api response data
        httpMOck
            .expectOne({
                method: 'POST',
                url: `${basicUrl}/search`
            })
            .flush({
                url: 'products',
                message: 'ok',
                status: 1
            });

        expect(component.result.message).toBe('ok');
        expect(component.result.url).toBe('products');
    }));
});
