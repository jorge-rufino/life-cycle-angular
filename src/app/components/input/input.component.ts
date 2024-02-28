import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input()
  itemQueSeraEditado! : Item;

  valorItem! : string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {

    //"CurrentValue" é o valor atual do Item. No momento que o componente é inicializado, ele é "indefinido" pois estamos usando
    //a "!" nele, e tb o valor "firstChange" é true pois "indefinido" é o primeiro valor dele, e depois de alterado este valor
    //ele sempre será "falso"
    console.log('Current value: ',changes['itemQueSeraEditado'].currentValue);
    console.log('First value: ',changes['itemQueSeraEditado'].firstChange);

    if(!changes['itemQueSeraEditado'].firstChange) {
      this.valorItem = this.itemQueSeraEditado?.nome;
    }
  }

  adicionarItem(): void {
    if(this.valorItem) {
      if(this.valorItem.trim().length > 0 ){
        this.listaService.adicionarItemNaLista(this.valorItem);
        this.limparCampo();
      } else {
        alert('Não é possível salvar um item em branco');
        this.limparCampo();
      }
    } else {
      alert('Digite o nome do item');
    }
  }

  limparCampo(){
    this.valorItem = '';
  }
}
