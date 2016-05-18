import { upgradeAdapter } from './upgrade_adapter';
import skyUx2Adapter  from './skyux2port/core.ts';

upgradeAdapter.bootstrap(document.body, ['barkbaud',  skyUx2Adapter.name], {strictDi: true});
