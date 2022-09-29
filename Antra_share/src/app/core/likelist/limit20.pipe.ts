import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit20'
})
export class Limit20Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let tempArr : Array<string> = this.stringToArray(value); // convert
    return this.arrayToString(tempArr.splice(0, 20)) + "...";
  }

  stringToArray(content: string) : Array<string> {
    return content.split(' ');
  }

  arrayToString(array : Array<string>) : string {
    return array.join(' ');
  }

}
