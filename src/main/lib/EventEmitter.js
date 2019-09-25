/* eslint-disable no-underscore-dangle */
import * as Rx from 'rxjs';

class EventEmitter {
  constructor() {
    this._emitter = new Rx.Subject();
  }

  emit(data?) {
    this._emitter.next(data);
  }

  subscribe(observer?: Rx.PartialObserver<any>) {
    this._emitter.subscribe(observer);
  }
}

export default EventEmitter;
