import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'formatGender'
})
export class FormatGenderPipe implements PipeTransform {
    transform(value: string): string {
        if (value.toLowerCase().includes('male') || value.toLowerCase().includes('female')) {
            return value[0];
        } else {
            return value;
        }
    }

}
