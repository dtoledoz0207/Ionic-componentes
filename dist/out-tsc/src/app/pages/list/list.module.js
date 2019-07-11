import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: ListPage
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [ListPage]
        })
    ], ListPageModule);
    return ListPageModule;
}());
export { ListPageModule };
//# sourceMappingURL=list.module.js.map