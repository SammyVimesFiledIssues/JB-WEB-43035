import {NgModule, NgZone} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UpgradeModule} from "@angular/upgrade/static";
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgSelectModule} from '@ng-select/ng-select';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UIRouter, UrlService } from '@uirouter/core';
import VaScriptListFeatureComponent from "./script/va-script-list-feature.component";


@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule,
        HttpClientModule,
        NgSelectModule,
        NgbModule
    ],
    declarations: [
        VaScriptListFeatureComponent
    ],
    entryComponents: [
    ]
})
export class AppModule {

    private static appName: string;
    private static doc: Element;

    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(AppModule.doc, [AppModule.appName], {strictDi: true});
    }

    public static start(appName: string, doc: Element) {
        AppModule.appName = appName;
        AppModule.doc = doc;
        platformBrowserDynamic().bootstrapModule(AppModule)
            .then(platformRef => {
            const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

            function startUIRouter() {
                urlService.listen();
                urlService.sync();
            }

            platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
        });
    }

}

export default AppModule;
