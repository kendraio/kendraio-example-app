import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {modalReducer} from "./reducers/modal";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {AssetsModule} from "./assets/assets.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        StoreModule.forRoot({
            modal: modalReducer,
            routerReducer: routerReducer
        }),
        StoreRouterConnectingModule,
        AssetsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
