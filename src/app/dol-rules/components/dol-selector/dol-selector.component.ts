import { Component, Input, ChangeDetectionStrategy, forwardRef, OnInit } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NUMBER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DolSelectorComponent),
    multi: true
};


@Component({
    selector: 'dol-selector',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dol-selector.component.html',
    styleUrls: ['./dol-selector.component.scss'],
    providers: [NUMBER_CONTROL_ACCESSOR]
})
export class DolSelectorComponent implements ControlValueAccessor, OnInit {

    @Input() selectors: Array<string>;
    @Input() step: number = 1;
    @Input() width: string = "";
    @Input() noEdit:boolean = false;
    private min: number = 0;
    private max: number;
    private index: number;

    @Input() title: string = '';
    @Input() unit: string = '';

    value: string;
    focused: boolean;

    private onTouch: Function;
    private onModelChange: Function;

    ngOnInit() {
        this.max = this.selectors.length - 1;
        if (this.value === "") {
            this.index = 0;
            this.value = this.selectors[0];
        }
        else {
            try {
                console.log(`value: ${this.value} selectors: ${this.selectors} rest:  ${this.selectors.indexOf(this.value)}`);
                this.index = this.selectors.indexOf(this.value);
            }
            catch (ex) {
                this.index = 0;
                this.value = this.selectors[0];
            }
        }
        console.log(`index is ${this.index}`)
    }

    private onChange(value: string) {
        console.log(`onChange...value:${value}`);
        this.value = value;
        this.onModelChange(value);
    }


    registerOnChange(fn: Function) {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function) {
        this.onTouch = fn;
    }

    writeValue(value: string) {
        this.value = value;
        this.index = this.selectors.indexOf(this.value);
    }

    increment() {
        if (this.selectors.indexOf(this.value) < this.max) {
            this.index = this.selectors.indexOf(this.value) + this.step;
            this.onChange(this.selectors[this.index]);
        }
        this.onTouch();
    }

    decrement() {
        if (this.selectors.indexOf(this.value) > this.min) {
            this.index = this.selectors.indexOf(this.value) - this.step;
            this.onChange(this.selectors[this.index]);
        }
        this.onTouch();
    }

    private onBlur(event: FocusEvent) {
        this.focused = false;
        event.preventDefault();
        event.stopPropagation();
    }

    private onKeyUp(event: KeyboardEvent) {

        let handlers = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment()
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    }

    private onFocus(event: FocusEvent) {
        this.focused = true;
        event.preventDefault();
        event.stopPropagation();
    }

    constructor() {

    }
}