import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: number) {
    return value.toLocaleString('pt-BR');
  }
}
