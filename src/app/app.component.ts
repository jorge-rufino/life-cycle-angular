import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Implementamos o "OnInit" para que ele faça o carregamento da lista.
//O método "ngOnInit" é o primeiro método a ser executado. Todos os métodos do ciclo de vida tem o prefixo "ng"
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';

  // "!" para iniciar como um Array vazio
  listaDeCompras! : Item[];

  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
    console.log(this.listaDeCompras)
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

  //Este método diferentemente do "NgOnit" que é chamado somente uma vez na inicialização do componente, e do "NgOnChange"
  //que é chamado somente quando há alteração dos dados de entrada, o "NgDoCheck" é executado em qualquer alteração do
  //componente, inclusive alterações dos componentes filhos tb.
  //Tomar cuidado pois como ele é chamado muitas vezes, pode acabar compromentendo a perfomance
  ngDoCheck(): void {
    console.log('DoCheck foi chamado.')
    this.listaService.atualizarLocalStorage();
  }

  deletarItem(id: number) {
    console.log(id)
    const index = this.listaDeCompras.findIndex((item)=>item.id === id);
    //A partir do indice/index, exclua 1 item
    this.listaDeCompras.splice(index, 1);
  }
}
