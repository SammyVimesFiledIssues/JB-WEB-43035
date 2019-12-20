import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
    templateUrl: './va-script-list-feature.component.html'
})
export default class VaScriptListFeatureComponent {  

    header: any[];

    public scripts: VaScript[] = [];

    constructor(private http: HttpClient) {
    }

}

interface VaScript {
    test: string;
}