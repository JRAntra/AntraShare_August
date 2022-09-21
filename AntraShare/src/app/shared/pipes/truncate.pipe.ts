import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(content: string) {
    // limits to max length of 20 characters
    var limit = 20;
    // if content is below limit, don't worry. If it isn't ...
    if (content.length < limit) {
      return content;
    } else { // ... then cut content at limit, add '...'
      return (content.substr(0, limit) + '...')
    }
  }

}
