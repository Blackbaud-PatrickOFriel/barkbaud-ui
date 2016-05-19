import alertModule from './alert.module.ts';
import checkModule from './check.module.ts';

let skyUx2Adapter = angular.module('barkbaud.skyux2', [
  alertModule.name,
  checkModule.name
]);

export default skyUx2Adapter;
