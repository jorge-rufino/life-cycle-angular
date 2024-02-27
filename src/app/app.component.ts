import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Implementamos o "OnInit" para que ele faça o carregamento da lista.
//O método "ngOnInit" é o primeiro método a ser executado. Todos os métodos do ciclo de vida tem o prefixo "ng"
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';

  // "!" para iniciar como um Array vazio
  listaDeCompras! : Item[];

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
    console.log(this.listaDeCompras)
  }

  editarItem(item: Item){
    console.log(item);
  }
}
