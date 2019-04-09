import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pr-form-tipo-tercero',
  templateUrl: './pr-form-tipo-tercero.component.html',
  styleUrls: ['./pr-form-tipo-tercero.component.scss']
})
export class PrFormTipoTerceroComponent implements OnInit {

  @Input('formularioCiudadano') formularioCiudadano: FormGroup;
  public foods: Array<object> = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  public options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
    console.log('this.formularioCiudadano :', this.formularioCiudadano);
  }

}
