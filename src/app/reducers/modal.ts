

import {Action} from "@ngrx/store";

export const SHOW_MODAL = '[Modal] Show';
export const HIDE_MODAL = '[Modal] Hide';

export function modalReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case SHOW_MODAL:
            return true;
        case HIDE_MODAL:
            return false;
        default:
            return state;
    }
}
