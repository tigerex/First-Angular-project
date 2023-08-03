import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modifie-item',
  templateUrl: './modifie-item.component.html',
  styleUrls: ['./modifie-item.component.scss']
})
export class ModifieItemComponent {
  @Input() item: Item=<Item>{};
  items: Item[] = [];

  // @Output() onDetail = new EventEmitter();
  @Output() closeDetailDialog = new EventEmitter();

  myForm: FormGroup = new FormGroup({});
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl();
  quantity_inStock: FormControl<number | null> = new FormControl();
  description: FormControl<string | null> = new FormControl('');
  url: FormControl<string | null> = new FormControl('');

  constructor(public dataService: DataService,public authService:AuthenticationService) { 
  }

  close() {
    this.closeDetailDialog.emit();
  }

  update() {
    if (this.name.value == '' || this.price.value == 0 || this.quantity_inStock.value == 0 || this.description.value == '') {
      alert('Nothing to update!');
    } else {
      let updateItem: Item = {
        id: this.item.id,
        name: this.name.value ?? this.item.name,
        price: this.price.value ?? this.item.price,
        quantity_inStock: this.quantity_inStock.value ?? this.item.quantity_inStock,
        quantity_inCart: 1,
        description: this.description.value ?? this.item.description,
        url: this.url.value??'https://picsum.photos/800/1000?random='+this.item.id,
      };

      this.dataService.updateItemWithID(this.item.id, updateItem);
      alert('Item '+updateItem.name+' updated successfully!');
    }
    this.myForm.reset();
  }

  deleteItem() {
    this.dataService.deleteItemWithID(this.item.id);
    alert('Item '+this.item.name+' deleted successfully!');
    this.myForm.reset();
    this.closeDetailDialog.emit();
  }
}
