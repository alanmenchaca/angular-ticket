import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            'curp': this.generateCurpFormControl(),
            'completeName': this.generateNameFormControl(),
            'lastNamePaternal': this.generateNameFormControl(),
            'lastNameMaternal': this.generateNameFormControl(),
            'housePhone': this.generatePhoneFormControl(),
            'cellPhone': this.generatePhoneFormControl(),
            'email': this.generateEmailFormControl(),
            // 'selectLevel': this.generateSelectFormControl(),
            // 'selectMun': this.generateSelectFormControl(),
            // 'select': this.generateSelectFormControl()
        });
    }

    generateCurpFormControl() {
        let validCurpRegexPattern: string = '^[a-zA-Z]{4}[0-9]{6}[a-zA-Z]{6}[0-9]{2}$';
        let validators = [Validators.required, Validators.pattern(validCurpRegexPattern)];
        return new FormControl("", validators);
    }

    generateNameFormControl() {
        let validNameRegexPattern: string = '^[a-zA-Z ]{3,50}$';
        let validators = [Validators.required, Validators.pattern(validNameRegexPattern)];
        return new FormControl("", validators);
    }

    generatePhoneFormControl() {
        let validPhoneRegexPattern: string = '^[0-9]{10}$';
        let validators = [Validators.required, Validators.pattern(validPhoneRegexPattern)];
        return new FormControl("", validators);
    }

    generateEmailFormControl() {
        let validators = [Validators.required, Validators.email];
        return new FormControl("", validators);
    }

    generateSelectFormControl() {
        let validators = [Validators.required];
        return new FormControl("", validators);
    }

    checkTextInput(field: string) {
        let isValidField: boolean | undefined = this.myForm.get(field)?.invalid;
        let isFieldDirty: boolean | undefined = this.myForm.get(field)?.dirty;
        let isFieldTouched: boolean | undefined = this.myForm.get(field)?.touched;
        return isValidField && (isFieldDirty || isFieldTouched);
    }
}
