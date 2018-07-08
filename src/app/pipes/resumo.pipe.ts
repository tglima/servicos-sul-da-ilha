import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumido'
})
export class ResumoPipe implements PipeTransform {

  transform(texto: string): string {
    if (texto.length > 30) {
      return texto.substr(0, 27) + '...';
    }
    return texto;
  }
}
