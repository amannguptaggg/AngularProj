import {Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {ActivateGuard}  from './activate.guard'
import {MerchantComponent} from './merchant/merchant.component'
import { DeactivateGuard } from './deactivate.guard';
import {CustomerComponent} from './customer/customer.component';
import {AddCustomerComponent} from './add-customer/add-customer.component'
import { ActivateChildGuard } from './activate-child.guard';
import {ViewDetailsComponent} from './view-details/view-details.component'

export const AppRoutes:Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'admin',
        component:AdminComponent,
        canActivate:[ActivateGuard],
    },
    {
        path: 'merchant',
        component:MerchantComponent,
        canDeactivate:[DeactivateGuard],
    },
    {
        path: 'customer',
        component:CustomerComponent,
        canActivateChild:[ActivateChildGuard],
        children: [
            {
                path: 'addCustomer',
                component:AddCustomerComponent,
            }
        ]
    },
    {
       path: 'viewDetails/:id',
       component: ViewDetailsComponent,
    }
]