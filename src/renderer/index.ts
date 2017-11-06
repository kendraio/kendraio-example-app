// Polyfills
import "core-js/es7/reflect";
import 'zone.js/dist/zone';

// Vendor
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/core";
import "@angular/common";
import "@angular/http";
import "@angular/router";
import "rxjs";

// main

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";

if(process.env.NODE_ENV === "production") {
    enableProdMode();
}
const base = document.createElement('base');
base.href = './';
document.head.appendChild(base);

platformBrowserDynamic().bootstrapModule(AppModule);
