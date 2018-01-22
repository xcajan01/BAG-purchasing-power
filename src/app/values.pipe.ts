import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    //return Object.keys(value).map(key => value[key]);
    //return Object.keys(value);
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
