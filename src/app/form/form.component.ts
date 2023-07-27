import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../models/item.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  @Input()
  listItem : Item[] = [];

  myForm = new FormGroup({})
  name: FormControl<string|null> = new FormControl('');
  price: FormControl<number|null> = new FormControl();
  quantity: FormControl<number|null> = new FormControl();
  des: FormControl<string|null> = new FormControl('');

  constructor(){
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('des', this.des);
  }

  submit() {
    alert("Item's name: "+this.name.value + '\n' + "Item's price: "+this.price.value + '\n' + "Quantity: "+this.quantity.value + '\n' + "Description: "+this.des.value)
  }

}
