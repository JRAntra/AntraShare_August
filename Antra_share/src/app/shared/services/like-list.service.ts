import { Injectable, EventEmitter } from '@angular/core';
import { storyInterface } from '../interfaces/storyInterface';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeListService {
  // store data and emit from here

  // dataEmitter = new EventEmitter<storyInterface[]>();
  dataEmitter = new Subject<storyInterface>();

  raiseDataEmitterEvent(data: storyInterface) {
    // console.log(data); // this is being passed properly
    this.dataEmitter.next(data);
  }
}
