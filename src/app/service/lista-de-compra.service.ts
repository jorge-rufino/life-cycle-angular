import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
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
  }
}
