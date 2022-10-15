import {
  AbstractControl,
  ValidationErrors,
  AsyncValidator,
} from '@angular/forms';

import { map, Observable } from 'rxjs';
import { of } from 'rxjs';

import { ValidateRegisterService } from '../services/validate-register.service';
//example
export function noDuplicate(control: AbstractControl): ValidationErrors | null {
  let newControlValue = control.value.split('').sort().join('');
  for (let i = 0; i < newControlValue.length - 1; i++) {
    if (newControlValue.chatAt(i) === newControlValue.charAt(i + 1)) {
      return { noDuplicate: true };
    }
  }
  return null;
}

// export class checkValidate {
//   constructor(private service: ValidateRegisterService) {}

export function checkValidate(service: ValidateRegisterService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    let emailStr = control.value;
    let res;

    return service.checkEmailValid(emailStr).pipe(
      map((res) => {
        if (res) {
          return { noDuplicate: true };
        } else {
          return null;
        }
      })
    );

    // subscribe((val) => {
    //   if (val) {
    //     return of({ noDuplicateEmail: val });
    //   } else {
    //     return of(null);
    //   }
    // });
  };
}
// }
