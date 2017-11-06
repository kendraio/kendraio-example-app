import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {HIDE_MODAL} from "./reducers/modal";

import "../sass/styles.scss";

interface AppState {
    modal: boolean;
}

@Component({
    selector: '#app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    isModalActive$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.isModalActive$ = store.select('modal');
    }

    closeModal() {
        this.store.dispatch({ type: HIDE_MODAL });
    }
}
