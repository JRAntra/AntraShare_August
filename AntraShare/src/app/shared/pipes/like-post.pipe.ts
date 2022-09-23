import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likePost'
})
export class LikePostPipe implements PipeTransform {

  transform(value: number | undefined, likes: number): string {
    return (value as number + likes).toString();
  }

}
