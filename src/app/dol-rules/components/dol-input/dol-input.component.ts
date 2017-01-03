import { Component, Input, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'dol-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dol-input.component.html',
    styleUrls: ['./dol-input.component.scss']

})
export class DolInputComponent {
    constructor() { }

    @Input() title: string = '';
}