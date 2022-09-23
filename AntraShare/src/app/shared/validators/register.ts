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

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegisterValidators {
    constructor () {}

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            
            let valid = regex.test(control.value)
            console.log(typeof regex)
            console.log(regex,"compared to ",control.value," is ",valid)
            return valid ? null : error;
        }
    }

}