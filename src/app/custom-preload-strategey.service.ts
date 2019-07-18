import { Injectable } from '@angular/core';
import {PreloadingStrategy,Route} from '@angular/router';
import { Observable,of, timer } from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Injectable()

export class CustomPreloadStrategeyService implements PreloadingStrategy{
  preload(route: Route, load:() => import("rxjs").Observable<any>): import("rxjs").Observable<any> {
     if(route.data && route.data['preload']) {
       console.log('preload path is:'+ route.path + 'Delayed:' + route.data['delay']);
     if(route.data['delay']) {
       return timer(7000).pipe(mergeMap(()=>load()));
     } else{
       return load();
     }
     } else {

       return of([])
     
      } 

  }

}
