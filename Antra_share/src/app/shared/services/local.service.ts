// THIS is a wrapper service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  public tempAdmin : boolean = true;

  constructor() { }

  //https://blog.jscrambler.com/working-with-angular-local-storage/#:~:text=What%20is%20Local%20Storage%3F,allocated%20separately%20for%20each%20domain
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
