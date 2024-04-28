import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasepipe implements PipeTransform{

  transform( value: string, toUpper : boolean = false ) : string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
