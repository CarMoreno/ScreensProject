import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pr-form-tipo-tercero',
  templateUrl: './pr-form-tipo-tercero.component.html',
  styleUrls: ['./pr-form-tipo-tercero.component.scss']
})
export class PrFormTipoTerceroComponent implements OnInit {

  public formTipoTercero: FormGroup;
  public foods: Array<object> = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  public options: string[] = ['One', 'Two', 'Three'];

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getForm();
  }

  /**
   * Retorna el formulario de tipo de terceros
   */
  private getForm(): FormGroup{
    this.formTipoTercero = this.formBuilder.group({
      'editarDatosTercero':['',Validators.required],
      'entidadCiudadano': ['',Validators.required],
      'tipoTercero': ['',Validators.required],
      'tipoIdentificacion': ['',Validators.required]
    });
    return this.formTipoTercero;
  }

  public save(): void {
    console.log('editarDatosTercero: ', this.formTipoTercero.get('editarDatosTercero').value);
  }
}
