import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'pr-terceros',
  templateUrl: './pr-terceros.component.html',
  styleUrls: ['./pr-terceros.component.scss']
})
export class PrTercerosComponent implements OnInit {

  // Formulario de Crear y/o Editar terceros
  public formularioCiudadano: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getForm();
  }

  /**Evento de click */
  public save(): void {
  }

  /**
   * Armamos nuestro formulario de Crear y/o Editar Tercero
   */
  public getForm(): FormGroup {
    this.formularioCiudadano = this.formBuilder.group({
      'editarDatosTercero': ['',Validators.required],
      'entidadCiudadano': ['',Validators.required],
      'tipoTercero': ['',Validators.required],
      'tipoIdentificacion': ['',Validators.required],
      'identificacion': ['', [Validators.required, Validators.pattern('/[A-Za-z0-9]{0,20}$/')]],
      'nombres': ['', Validators.required, Validators.pattern('/[A-Za-z0-9ÁÉÍÓÚáéíóúñü]{3,50}$/')],  
      'apellidos': ['', Validators.required, Validators.pattern('/[A-Za-z0-9ÁÉÍÓÚáéíóúñü]{3,50}$/')],
      'vincularJuridico': ['', Validators.pattern('/[A-Za-z0-9ÁÉÍÓÚáéíóúñü]{3,50}$/')],
      'grupoMinoritario': ['', null],
    });
    return this.formularioCiudadano;
  }

}
