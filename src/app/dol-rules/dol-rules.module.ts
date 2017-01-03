import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { DolRulesComponent } from './containers/dol-rules.component';
import { DOLRulesDataService } from './dol-rules.service';

import { TextMaskModule } from 'angular2-text-mask';

import {DolLoaderComponent} from './components/dol-loader/dol-loader.component';
import {DolResultsComponent} from './components/dol-results/dol-results.component';
import {DolSelectorComponent} from './components/dol-selector/dol-selector.component';
import {DolInputComponent} from './components/dol-input/dol-input.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, TextMaskModule],
    exports: [DolRulesComponent],
    declarations: [DolRulesComponent, DolLoaderComponent, DolResultsComponent, DolSelectorComponent, DolInputComponent],
    providers: [DOLRulesDataService],
})
export class DOLRuesModule { }
