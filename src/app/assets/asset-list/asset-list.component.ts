import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {SHOW_MODAL} from "../../reducers/modal";
import {Observable} from "rxjs/Observable";
import {Asset} from "../modal/asset";

@Component({
    selector: 'app-asset-list',
    templateUrl: './asset-list.component.html'
})
export class AssetListComponent implements OnInit {

    asset$: Observable<Asset[]>;

    constructor(private store: Store<{assets: Asset[]}>) {
        this.asset$ = store.select('assets');
    }

    ngOnInit() {
    }

    addAsset() {
        this.store.dispatch({ type: SHOW_MODAL, route: 'new-asset' });
    }
}
