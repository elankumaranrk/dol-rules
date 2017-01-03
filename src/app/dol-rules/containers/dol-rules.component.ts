import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DOLRulesDataService } from '../dol-rules.service';
import { ValuePair } from '../models/valuepair';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe.js'
import createNumberMask from 'text-mask-addons/dist/createNumberMask.js'
const numberMask = createAutoCorrectedDatePipe("mm/dd/yyyy");


@Component({
    selector: 'dol-rules',
    templateUrl: './dol-rules.component.html',
    styleUrls: ['./dol-rules.component.scss']
})
export class DolRulesComponent implements OnInit {
    title: string = "Project DOL - Rules Data";
    models: any;
    ruledata: ValuePair[];
    dol: FormGroup;

    medium: string = 'medium';
    large: string = 'large';

    dateMask = { 'mask': [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/], 'pipe': numberMask, 'keepCharPositions': true, 'guide':true };
    moneyMask = {
        mask: createNumberMask({
            prefix: '$ ',
            allowDecimal: true
        })
    };

    private results: Array<String> = ['scenario', 'order', 'commission', 'sign'];

    private lob: Array<String> = ['FIA', 'VA'];
    private status: Array<String> = ['active', 'pending'];
    private quals: Array<String> = ['unknown', 'qualified', 'non qualified'];
    private sols: Array<String> = ['unknown', 'unsolicited', 'solicited'];
    private fi: Array<String> = ['unknown', 'no fi', 'fi'];


    constructor(public fb: FormBuilder, private dolService: DOLRulesDataService) { }

    ngOnInit() {
        this.dol = this.fb.group({
            input: this.fb.group({
                lob: 'FIA',
                qual: 'non qualified',
                sol: 'solicited',
                fi: 'fi',
                status: 'pending'
            }),
            query: this.fb.group({
                policy: ['', Validators.required],
                money: ['', Validators.required],
                date: ['', [Validators.required, Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')]]
            })
        });
        this.models = this.dolService.getData();
        this.ruledata = this.calculateRules(this.results, this.dol.controls['input'].value);
        this.dol.controls['input'].valueChanges.subscribe(data => { this.ruledata = this.calculateRules(this.results, data) });
        console.log(this.ruledata);
    }

    private searchPolicy(){
        console.log(this.dol.controls['query'].value);
    }

    private calculateRules(models, input): ValuePair[] {
        return models.map(name => {
            const {qual, sol, fi, status} = input;
            const value = this.models[status][qual][sol][fi][name];
            return {
                name,
                value
            };
        })
    }
}