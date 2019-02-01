import { Injectable } from '@angular/core';
import { ServiceTimerComponent } from './service-timer.component';

@Injectable()
export class TimerService {
  items: ServiceTimerComponent[] = [];

  constructor() {
  }

  register(item: ServiceTimerComponent) {
    this.items.push(item);
  }

  unregister(item: ServiceTimerComponent) {
    this.items = this.items.filter(i => i !== item);
  }

  stopAll() {
    this.items.forEach(i => i.stop());
  }

  startAll() {
    this.items.forEach(i => i.start());
  }
}
