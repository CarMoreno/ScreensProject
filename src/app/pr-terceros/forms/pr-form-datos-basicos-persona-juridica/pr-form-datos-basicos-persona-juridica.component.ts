import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pr-form-datos-basicos-persona-juridica',
  templateUrl: './pr-form-datos-basicos-persona-juridica.component.html',
  styleUrls: ['./pr-form-datos-basicos-persona-juridica.component.scss']
})
export class PrFormDatosBasicosPersonaJuridicaComponent implements OnInit {

  @Input('formularioCiudadano') formularioCiudadano: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
