import {Component} from '@angular/core';

@Component({
    template:'<a routerLink="companyList" routerLinkActive="active" style="margin-top:50px;">View Company List </a><router-outlet></router-outlet>'
})
export class CompanyComponent{
    constructor() {
        console.log('company module loaded');
    }
}