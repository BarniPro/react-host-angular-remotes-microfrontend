import "zone.js";

import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowser } from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
};

const ngVersion = require('../package.json').dependencies['@angular/core'];

(window as any).angularPlatform = (window as any).angularPlatform || {};
let platform = (window as any).angularPlatform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).angularPlatform[ngVersion] = platform;
}

const mount = () => {
  platform.bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));
};

export { mount };

