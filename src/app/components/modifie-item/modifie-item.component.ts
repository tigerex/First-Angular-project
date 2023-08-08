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
  id: FormControl<string | null> = new FormControl(this.item.id);
  name: FormControl<string | null> = new FormControl(this.item.name);
  price: FormControl<number | null> = new FormControl(this.item.price);
  quantity_inStock: FormControl<number | null> = new FormControl(this.item.quantity_inStock);
  description: FormControl<string | null> = new FormControl(this.item.description);
  url: FormControl<string | null> = new FormControl(this.item.url);

  constructor(public dataService: DataService,public authService:AuthenticationService) { 
  }

  close() {
    this.closeDetailDialog.emit();
  }

  check(){
    console.log(this.item);
  }

  update() {
    if (this.name.value == null && this.price.value == null && this.quantity_inStock.value == null && this.description.value == null && this.url.value == null) {
      alert('Nothing to update!');
    } else {
      let updateItem: Item = {
        id: this.item.id,
        name: this.name.value ?? this.item.name,
        price: this.price.value ?? this.item.price,
        quantity_inStock: this.quantity_inStock.value ?? this.item.quantity_inStock,
        quantity_inCart: 1,
        description: this.description.value ?? this.item.description,
        url: this.url.value?? this.item.url,
      };

      this.dataService.updateItemWithID(this.item.id, updateItem);
      alert('Item '+updateItem.name+' updated successfully!');
    }
    this.myForm.reset();
  }

  deleteItem() {
    if(confirm('Are you sure to delete this item?')){
      this.dataService.deleteItemWithID(this.item.id);
      alert('Item '+this.item.name+' deleted successfully!');
      this.myForm.reset();
      this.closeDetailDialog.emit();
    }else{
      alert ('Item '+this.item.name+' not deleted!');}
  }
}
