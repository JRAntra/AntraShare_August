/*
Create Custom Async Validator for Username field
If username is not existed, display error message "Username already been used"
API Url ===> localhost:4231/api/register/checkExistByUsername/:username

 Create Custom Async Validator for Email field
If email is already used, display error message "Email already been used"
API Url ===> localhost:4231/api/register/checkExistByEmail/:userEmail

Password must have at least 1 uppercase, 1 lowercase, 1 special character

Password confirm should have exact the same input as Password Field, if not, display message : password confirm should be the same as password
*/

import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { map, Observable } from "rxjs";
import { ValidateDataService } from "../services/validate-data.service";

export class RegisterValidators {
    constructor () {}

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            
            const valid = regex.test(control.value)
            console.log(typeof regex)
            console.log(regex,"compared to ",control.value," is ",valid)
            return valid ? null : error;
        }
    }

    static usernameValidator(service: ValidateDataService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const username = control.value
            return service.checkUserName(username).pipe(
                map( (response) => {
                    if (response) return { "hasusername" : true}
                    else return null
                    //return response ? {"hasusername" : true} : null
                })
            )
        }
    }

    static emailValidator(service: ValidateDataService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const email = control.value
            return service.checkEmail(email).pipe(
                map( response => {
                    return response ? {"hasemail" : true} : null
                })
            )
        }
    }

    static matchValidator(controlName: string, matchingControlName: string) {
        return(formGroup: FormGroup) => {
            const control = formGroup.controls[controlName]
            const matchingControl = formGroup.controls[matchingControlName]
            control.value !== matchingControl.value ? matchingControl.setErrors({"hasmatch" : true}) : matchingControl.setErrors(null)
        }
    }

}