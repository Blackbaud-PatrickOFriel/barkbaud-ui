import { upgradeAdapter } from './upgrade_adapter';
//import SkyUx2Adapter  from './skyux2port/core.ts';

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sky-alert',
  styles: [`
    .sky-alert {
    padding: 10px;
    margin-bottom: 20px;
    border: solid 1px transparent;
    border-radius: 4px;
}

// These alerts have the default Bootstrap colors.  We need to change them at some point.
.sky-alert-info {
    background-color: #d9edf7;
    border-color: #bce8f1;
    color: #31708f;
}

.sky-alert-success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #3c763d;
}

.sky-alert-warning {
    background-color: #fcf8e3;
    border-color: #faebcc;
    color: #8a6d3b;
}

.sky-alert-danger {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #ca2a2a;
}

}
  `],
  template: `<div class="sky-alert" [ngClass]="getCls()" >
  <ng-content></ng-content>
</div>`
})
export class SkyAlertComponent {
  @Input()
  public alertType: string;

  public getCls() {
    let cls = 'sky-alert-' + this.alertType;

    return cls;
  }
}

angular.module('barkbaud.skyux2', [])
  .directive('skyAlert', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyAlertComponent));




upgradeAdapter.bootstrap(document.body, ['barkbaud', 'barkbaud.skyux2' /*, SkyUx2Adapter.name*/], {strictDi: true});
