import { Pipe, PipeTransform } from '@angular/core';
import { UserComponent } from './user/user.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: UserComponent[], value: string): UserComponent[] {
    return users.filter(user => {
      return user.name.includes(value);
    });
  }

}
