
import {RouterModule, Routes} from "@angular/router";
import {AssetListComponent} from "./asset-list/asset-list.component";
import {NgModule} from "@angular/core";
import {NewAssetComponent} from "./new-asset/new-asset.component";

const assetRoutes: Routes = [
    {
        path: 'new-asset',
        component: NewAssetComponent,
        outlet: 'modal'
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(assetRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AssetsRoutingModule {}
