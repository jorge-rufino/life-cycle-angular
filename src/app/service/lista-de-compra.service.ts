import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  private criarItem(nomeItem: string): Item {
    const id = this.listaDeCompra.length + 1;

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
    this.listaDeCompra.push(item);
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
    this.listaDeCompra.splice(Number(itemAntigo.id)-1, 1, itemEditado);
    this.atualizarLocalStorage();
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
