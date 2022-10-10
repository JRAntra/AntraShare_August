import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit20'
})
export class Limit20Pipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string {
    let tempArr : Array<string> = this.stringToArray(value); // convert
    return this.arrayToString(tempArr.splice(0, 20)) + "...";
  }

  stringToArray(content: string | undefined) : Array<string> {
    return content!.split(' ');
  }

  arrayToString(array : Array<string>) : string {
    return array.join(' ');
  }

}
