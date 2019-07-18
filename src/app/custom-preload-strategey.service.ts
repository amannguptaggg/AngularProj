import { Injectable } from '@angular/core';
import {PreloadingStrategy,Route} from '@angular/router';
import { Observable,of } from 'rxjs';

@Injectable()

export class CustomPreloadStrategeyService implements PreloadingStrategy{
  preload(route: Route, load:() => import("rxjs").Observable<any>): import("rxjs").Observable<any> {
     if(route.data && route.data['preload']) {
       console.log('preload path is:'+ route.path);
       return load();
     } else {

       return  of([])
     
      } 

  }

}
