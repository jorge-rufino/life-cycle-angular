import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  item!: Item;

  @Output()
  emitindoItemParaEditar = new EventEmitter();

  @Output()
  emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  //Este método executa antes do "ngOnInit"
  ngOnChanges(): void {
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  comprarItem() {
    this.item.comprado = !this.item.comprado;
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  //Este metodo/hook é chamado antes do componente ser destruído.
  ngOnDestroy(): void {
      console.log('Componente foi destruído.');
  }
}
