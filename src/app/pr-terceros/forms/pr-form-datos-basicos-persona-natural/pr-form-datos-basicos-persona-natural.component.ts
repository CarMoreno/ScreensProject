import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pr-form-datos-basicos-persona-natural',
  templateUrl: './pr-form-datos-basicos-persona-natural.component.html',
  styleUrls: ['./pr-form-datos-basicos-persona-natural.component.scss']
})
export class PrFormDatosBasicosPersonaNaturalComponent implements OnInit {
  @Input('formularioCiudadano') formularioCiudadano: FormGroup;
  public listaMinorias: string[] = ['Indigena', 'Mestizo', 'Gitano', 'Afro'];
  constructor() { }

  ngOnInit() {
   // console.log('this.formularioCiudadano :DATOS BASICOS', this.formularioCiudadano);
  }
}
