import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(str: (string | undefined)): string | null{
    if(typeof str !== "string"){
      return null
    }
    if(str.length > 20){
      return str.slice(0, 20) + "...";
    }else{
      return str;
    }
  }
}
