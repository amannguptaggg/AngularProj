import {Component} from '@angular/core';

@Component({
template: '<a routerLink="compnayList" routerLinkActive="active">See Company list</a><br><a routerLink="employee" routerLinkActive="active">See Company employee</a><router-outlet></router-outlet>'
})


export class CompanyComponent{

}