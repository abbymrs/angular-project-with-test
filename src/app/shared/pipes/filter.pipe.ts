import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const params = args[0];
        const keys = Object.keys(params);

        return value.filter((item: any) => {
            return keys.every(key => {
                return item[key] === params[key];
            });
        });
    }
}
