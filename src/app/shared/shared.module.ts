import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NavBarComponent, HeroComponent, PageNotFoundComponent],
    exports: [
        NavBarComponent,
        HeroComponent,
        PageNotFoundComponent
    ]
})
export class SharedModule {
}
