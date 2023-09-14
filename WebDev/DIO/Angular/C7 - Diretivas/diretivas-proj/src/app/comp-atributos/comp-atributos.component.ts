import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string = "disable";
  corFundo:string = "blue";
  corDaFonte:string = "yellow";
  item:string = "";
  lista:string[] = [];
  isEnable:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  trocar() {
    if(this.estilo == "disable") {
      this.estilo = "enable"
    } else{
      this.estilo = "disable"
    }
  }

  adicionarLista() {
    this.lista.push(this.item)
  }

}
