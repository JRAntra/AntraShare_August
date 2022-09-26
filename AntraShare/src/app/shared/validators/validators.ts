

import { AbstractControl, ValidationErrors, AsyncValidator, FormGroup } from "@angular/forms"
import { Observable, map } from "rxjs"
import { ValidateService } from "../service/validate.service"

export function checkUserNameValid(service: ValidateService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const userName = control.value;
        return service.checkUserNameValid(userName).pipe(
            map(res => {
                if (res) return { "isInvalid": true };
                return null;
            })
        );
    }
}

export function checkPasswordValid(control: AbstractControl): ValidationErrors | null {
    // at least 1 uppercase character, 1 lowercase character, and 1 special character
    const regex = new RegExp('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$ %^&*-])');
    const password = control.value;
    return regex.test(password) ? null : { "isInvalid": true }
}

export function CheckValuesMatch(controlName: string, matchingControlName: string) {
    return (fg: FormGroup) => {
        const _control = fg.controls[controlName];
        const _matchingControl = fg.controls[matchingControlName];
        if (_control.value !== _matchingControl.value) {
            _matchingControl.setErrors({ "isInvalid": true });
        }
    }
}