import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitChar'
})
export class LimitCharPipe implements PipeTransform {

  transform(content: string): string {
    if (typeof content === "string") {
      const string = content
      if (string.length > 20) {
        return string.slice(0, 20) + "..."
      } else {
        return string
      }
    } else {
      console.log("not string", content)
      return content
    }
 
  }
}
