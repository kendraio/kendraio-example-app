import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {AssetListComponent} from "./assets/asset-list/asset-list.component";

const appRoutes: Routes = [
    // {
    //     path: 'assets',
    //     loadChildren: './assets/assets.module#AssetsModule',
    //     pathMatch: 'full'
    // },
    {
        path: 'assets',
        component: AssetListComponent
    },
    {
        path: '',
        redirectTo: '/assets',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
