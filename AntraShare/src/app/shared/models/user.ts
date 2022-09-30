import { FormGroup, AbstractControl } from "@angular/forms";

export interface User {
    username: string,
    password: string,
    email: string,
}

export interface UserFormGroup extends FormGroup {
    value: User;
  
    // We need to add these manually again, same fields as User
    controls: {
      username: AbstractControl;
      password: AbstractControl;
      email: AbstractControl;
    };
  }