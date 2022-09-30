import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string | undefined, maxLength: number): string {
    if (value == undefined) return '';
    return value.length < maxLength ? value : value.slice(0, maxLength) + '...';
  }

}
