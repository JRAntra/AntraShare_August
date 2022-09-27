import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { map, Observable } from "rxjs";
import { ValidateDataService } from "../services/validate-data.service";

export class InputValidators {
    constructor() { }

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl) => {

            if (!control.value) {
                return null;
            }

            const valid = regex.test(control.value)

            return valid ? null : error;
        }
    }

    static usernameValidator(service: ValidateDataService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const username = control.value
            return service.checkUserName(username).pipe(
                map((response) => {
                    if (response) return { "hasusername": true }
                    else return null
                })
            )
        }
    }

    static emailValidator(service: ValidateDataService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const email = control.value
            return service.checkEmail(email).pipe(
                map(response => {
                    return response ? { "hasemail": true } : null
                })
            )
        }
    }

    static matchValidator(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName]
            const matchingControl = formGroup.controls[matchingControlName]
            if (control.value !== matchingControl.value)
                matchingControl.setErrors({ "hasmatch": true });
        }
    }

}