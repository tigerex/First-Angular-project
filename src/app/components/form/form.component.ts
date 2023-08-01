import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../../models/item.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  listItems: Item[] = [];

  @Output() onNewItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() openCart: EventEmitter<any> = new EventEmitter<any>();

  myForm: FormGroup = new FormGroup({});
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl();
  quantity_inStock: FormControl<number | null> = new FormControl();
  description: FormControl<string | null> = new FormControl('');

  ngOnInit(): void {
    console.log(
      this.listItems.length != 0 ? this.listItems : 'No item in list'
    );
  }

  constructor(public authService:AuthenticationService,
    public dataService: DataService) {
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity_inStock);
    this.myForm.addControl('des', this.description);
  }

  openDialog() {
    this.openCart.emit();
    console.log(this.listItems)
  }

  submit() {
    if (
      this.name.value == '' ||
      this.price.value == 0 ||
      this.quantity_inStock.value == 0 ||
      this.description.value == ''
    ) {
      alert('ERROR: One or more fields are empty or incorrect!');
    } else {
      let newItem: Item = {
        id: this.listItems.length + 1,
        name: this.name.value!,
        price: this.price.value ?? 0,
        quantity_inStock: this.quantity_inStock.value ?? 0,
        quantity_inCart: 1,
        description: this.description.value!,
        url: 'https://picsum.photos/800/1000?random='+this.listItems.length + 1,
      };
      this.onNewItem.emit(newItem);
      this.dataService.addItem(newItem);
      alert('Item '+newItem.name+' added successfully!');
    }
    this.myForm.reset();
  }

}
