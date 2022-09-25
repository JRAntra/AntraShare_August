import { FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn , AbstractControl} from "@angular/forms";
import { Observable, map } from "rxjs";
import { ValidatenameService } from "../services/validatename.service";
export class profileValidators{

    //function that returns an asyncvalidatorFn
    static asyncValiddateName(service: ValidatenameService){
        return function validateName(control: AbstractControl): Observable<ValidationErrors | null>{
            return service.validateName(control.value)
                .pipe(
                    map((bool) => {return bool? {["invalidName"]: "this username isn't valid"}: null})
                )
        }
    }
    
    //TODO: clean up regex
    static validatePassword(control: AbstractControl){
        return /[A-Z]+/.test(control.value) && /[a-z]+/.test(control.value) && /[^A-Za-z0-9]/.test(control.value)?
            null : {["invalidPassword"]: "this password is invalid"}
    }

    //function that returns validatorFn
    static confirmPassword(password: FormControl): ValidatorFn{
        function confirm(confirmPassword: AbstractControl): ValidationErrors | null{
            if(password.value === confirmPassword.value){
                return null
            }else{
                console.log(password.value)
                console.log(confirmPassword.value)
                return {["confirmError"]: "Passwords do not match"}
            }
        }
        return confirm
    }
}