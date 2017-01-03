import { Component, OnInit, Input } from '@angular/core';

import {ValuePair} from '../../models/valuepair';

@Component({
    selector: 'dol-results',
    templateUrl: './dol-results.component.html',
    styleUrls:['./dol-results.component.scss']
})
export class DolResultsComponent implements OnInit {
    @Input() results:ValuePair[];
    constructor() { }

    ngOnInit() { }
}