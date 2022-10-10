import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, map, debounceTime, take, of } from "rxjs";
import { ValidateUsernameService } from "../services/validate-username.service";
import { ValidateEmailService } from "../services/validate-email.service";

// grab service first
// export function doesUsernameMatch_(service : ValidateUsernameService) {
//     // actual validate function
//     return (control : AbstractControl) : Observable<ValidationErrors | null> => {
//         return service.checkUsername(control.value).pipe(
//             debounceTime(500),
//             map(res => {
//                 if(res)
//                     return {"validUsername" : false};
//                 else
//                     return null;
//             })
//     )};
// }

// https://www.thisdot.co/blog/using-custom-async-validators-in-angular-reactive-forms
export class doesUsernameMatch {
    static validator(service : ValidateUsernameService) : AsyncValidatorFn {
    return (control : AbstractControl) : Observable<ValidationErrors | null> => {
        return service.checkUsername(control.value).pipe(
            debounceTime(500), // wait for person to stop typing
            take(1), // make sure it completes
            map((res : boolean) => {
            if(res)
                return {'validUsername' : true};
            else
                return null;
            }))
        }
    }
}

// copy paste right now because I'm not sure how to grab the boolean without having to overhaul everything
export class doesUsernameExist {
    static validator(service : ValidateUsernameService) : AsyncValidatorFn {
    return (control : AbstractControl) : Observable<ValidationErrors | null> => {
        return service.checkUsername(control.value).pipe(
            debounceTime(500), // wait for person to stop typing
            take(1), // make sure it completes
            map((res : boolean) => {
            if(res)
                return null;
            else
                return {'existingUsername' : true};
            }))
        }
    }
}

// check if email is taken or not
export class doesEmailMatch {
    static validator(service : ValidateEmailService) : AsyncValidatorFn {
    return (control : AbstractControl) : Observable<ValidationErrors | null> => {
        return service.checkEmail(control.value).pipe(
            debounceTime(500), // wait for person to stop typing
            take(1), // make sure it completes
            map((res : boolean) => {
                if(res)
                    return null;
                else
                    return {'validEmail' : true};
            }))
        }
    }
}

export function checkPasswordComplexity (control : AbstractControl) : Observable<ValidationErrors | null> {
    const password = control.value;
    // only run through the string once
    for(const letter of password) {
        if(!(isUppercase(letter) || isLowercase(letter) || isSpecialCharacter(letter)))
            return of({'notComplex' : true});
    }

    return of(null);
}

// functions below for checkPasswordComplexity
function isUppercase(letter : string) : boolean {
    return letter.toUpperCase() === letter;
}
function isLowercase(letter : string) : boolean {
    return letter.toLowerCase() === letter;
}
function isSpecialCharacter(letter : string) : boolean {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(letter);
}

// export function doesPasswordMatch(group : AbstractControl) : Observable<ValidationErrors | null> {
//     const password = group.get('password')?.value;
//     const repass = group.get('repass')?.value;

//     // for some reason the abstract control is not being passed

//     // return password === repass ? of(null) : of({ 'notSame' : true});
//     if(password === repass)
//         return of(null);
//     else
//         return of({'notSame' : true});
// }

export function doesPasswordMatch(password: string) : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const repass = control.get('repass')?.value;

        if(password === repass)
            return null;
        else
            return {'notSame' : true};
    }
}

