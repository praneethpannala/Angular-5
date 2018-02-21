import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'capitalise'})

export class CapitalisePipe implements PipeTransform {
    transform(value: string): any{
            return value.toUpperCase();
       
    }
}

