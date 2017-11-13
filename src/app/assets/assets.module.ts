import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssetListComponent} from './asset-list/asset-list.component';
import {AssetsRoutingModule} from "./assets-routing.module";
import {SharedModule} from "../shared/shared.module";
import { NewAssetComponent } from './new-asset/new-asset.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AssetsRoutingModule
    ],
    declarations: [AssetListComponent, NewAssetComponent],
    exports: []
})
export class AssetsModule {}
