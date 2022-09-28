import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { map, Observable, of } from "rxjs";
// import { ValidateLoginService } from "../service/validate-login.service";
import { ValidateRegisterService } from "../service/validate-register.service";

export class emailValidator {
     //function that returns an asyncvalidatorFn
     static asyncValidateEmail(service: ValidateRegisterService){
        return function checkEmailValid(control: AbstractControl): Observable<ValidationErrors | null>{
            return service.checkEmailValid(control.value)
                .pipe(
                    map((bool) => {return bool? {["invalidEmail"]: "this email isn't valid"}: null})
                )
        }
    }
}

export class usernameValidator {
    //function that returns an asyncvalidatorFn
    static asyncValiddateUsername(service: ValidateRegisterService){
        return function checkUsernameValid(control: AbstractControl): Observable<ValidationErrors | null>{
            return service.checkUsernameValid(control.value)
                .pipe(
                    map((bool) => {return bool? {["invalidUsername"]: "this username isn't valid"}: null})
                )
        }
    }
}

export class confirmPasswordMatch{
    static confirmPassword(password: FormControl): ValidatorFn{
        function confirm(passwordConfirm: AbstractControl): ValidationErrors | null{
            if(password.value === passwordConfirm.value){
                return null
            }else{
                console.log(password.value)
                console.log(passwordConfirm.value)
                return {["confirmError"]: "Passwords do not match"}
            }
        }
        return confirm
    }
}
export function noDuplicate (control: AbstractControl) : ValidationErrors | null {

    let newControlValue = control.value.split("").sort().join("");
    for (let i = 0; i < newControlValue.length - 1; i++) {
        if ( newControlValue.charAt(i) === newControlValue.charAt(i+1)) {
            return {"noDuplicate" : true}
        }
    }
    return null;
}

export function noupper (control: AbstractControl) : ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    if (!hasUpperCase){
        return {"noupper": true}
    }
    return null;
}

export function nolower (control: AbstractControl) : ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }
    const hasUpperCase = /[a-z]+/.test(value);
    if (!hasUpperCase){
        return {"nolower": true}
    }
    return null;
}

export function nospecial (control: AbstractControl) : ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }
    const hasLowerCase = /[^A-Za-z0-9]+/.test(value);
    if (!hasLowerCase){
        return {"nospecial": true}
    }
    return null;
}

export function checkPasswords (group: AbstractControl):  ValidationErrors | null { 

    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirm')?.value
    return pass === confirmPass ? null : { "confirmFail": true }
}

export function checkValidateEmail(service: ValidateRegisterService) {
    return (control: AbstractControl): Observable<ValidationErrors| null> =>{
        let emailStr = control.value;
        let res;
        return service.checkEmailValid(emailStr).pipe(
            map(res=> {
                if (res) {
                    return {"noDuplicateEmail": true};
                }
                else {
                    return null;
                }
            })
        )
    }

}


// export function checkValidateUser(service: ValidateLoginService) {
//     return (control: AbstractControl): Observable<ValidationErrors | null> => {
//          let usernameStr = control.value
//          return service.checkUsernameValid(usernameStr).pipe(
//              map(res => {
//                  if (res) {
//                      return { "isValid" : true}
//                  }
//                  else {
//                      return null
//                  }
//              })
//          )
 
//      }
//  }
// export function checkEmail(control: AbstractControl) : Observable<ValidationErrors| null> {
//     constructor() {

//     }
//     return of(null);
// }
