import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  valorItem!: string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

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
