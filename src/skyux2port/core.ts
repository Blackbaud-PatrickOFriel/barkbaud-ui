import alertModule from './alert.module.ts';
import checkModule from './check.module.ts';
import repeaterModule from './repeater.module.ts';
import repeaterItemModule from './repeater-item.module.ts';


let skyUx2Adapter = angular.module('barkbaud.skyux2', [
  alertModule.name,
  checkModule.name,
  repeaterModule.name,
  repeaterItemModule.name
]);

export default skyUx2Adapter;
