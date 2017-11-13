
import {Asset} from "../modal/asset";
import {Action} from "@ngrx/store";

export const ADD_ASSET_MODAL = '[Assets] Add asset modal';

export function assetsReducer(state: Asset[] = [], action: Action) {
    switch (action.type) {
        case ADD_ASSET_MODAL:
            return state;

        default:
            return state;
    }
}
