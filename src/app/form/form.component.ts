import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formula } from '../shannon-formula/shannon-formula';


@Component({
  selector: 'formula-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class ShannonComponent implements OnInit {
  formulaForm!: FormGroup;
  resultado: any;

  constructor() { }
  ngOnInit() {
    this.formulaForm = new FormGroup({
      str: new FormControl('', Validators.required)
    });
  }

  onSubmit(): String {
    let str: string;
    let entropia: any;

    str = this.formulaForm.value.str;

    entropia = new Formula().entropia(str);
    this.resultado = entropia;
    console.log(this.resultado);
    return this.resultado;
  }
}