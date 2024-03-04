import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompras: Item[];

  constructor() {
    this.listaDeCompras = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompras;
  }

  private criarItem(nomeItem: string): Item {
    const id = Date.now();

    const novoItem: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }

    return novoItem;
  }

  adicionarItemNaLista(nomeItem: string){
    const item = this.criarItem(nomeItem);
    this.listaDeCompras.push(item);
    this.atualizarLocalStorage();
  }

  editarItemNaLista(itemAntigo: Item, nomeEditadoDoItem: string){
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    //"splice" o primeiro parametro é "índice" que queremos selecionar na lista
    //O segundo parametro é a quantidade de items que queremos remover a partir do indice selecionado,
    //e o terceiro parametro é o que queremos adicionar na lista.
    //Os indices iniciam com 0, e como os IDs da lista são 1 a mais que o indice, diminuímos em 1.
    const index = this.listaDeCompras.findIndex((item)=>item.id === itemAntigo.id);
    this.listaDeCompras.splice(index, 1, itemEditado);
    this.atualizarLocalStorage();
  }

  deletarItemDaLista(id: number){
    const index = this.listaDeCompras.findIndex((item)=>item.id === id);
    //A partir do indice/index, exclua 1 item
    this.listaDeCompras.splice(index, 1);
    this.atualizarLocalStorage();
  }

  //Este método está sendo chamado no AppComponent através do DoCheck
  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompras));
  }

  limparLocalStorage(){
    localStorage.removeItem('itens');
  }
}
