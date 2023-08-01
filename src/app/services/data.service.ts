import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, collectionSnapshots, query, where, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Item } from '../models/item.model';
import { async } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  listItems: Item[] = [];
  //   {
  //     id: 1,
  //     name: 'Item 1',
  //     price:  9999,
  //     quantity_inStock: 10,
  //     quantity_inCart: 1,
  //     description: 'This is item 1',
  //     url: "https://picsum.photos/200/300?random=2",
  //   },
  //   {
  //     id: 2,
  //     name: 'Item 2',
  //     price:  99,
  //     quantity_inStock: 100,
  //     quantity_inCart: 1,
  //     description: 'This is item 2',
  //     url: 'https://picsum.photos/200/300?random=1',

  //   },
  //   {
  //     id: 3,
  //     name: 'Item 3',
  //     price:  200,
  //     quantity_inCart: 1,
  //     quantity_inStock: 18,
  //     description: 'This is item 3',
  //     url: 'https://picsum.photos/200/300?random=3',
  //   },
  //   {
  //     id: 4,
  //     name: 'Item 4',
  //     price:  12,
  //     quantity_inCart: 1,
  //     quantity_inStock: 234,
  //     description: 'This is item 4',
  //     url: 'https://picsum.photos/200/300?random=4',
  //   },
  //   {
  //     id: 5,
  //     name: 'Item 5',
  //     price:  765,
  //     quantity_inCart: 1,
  //     quantity_inStock: 99,
  //     description: 'This is item 5',
  //     url: 'https://picsum.photos/200/300?random=5',
  //   },
  // ]

  itemCollection = collection(this.firestore, 'items');

  // fireStore: Firestore = inject(Firestore);
  
  constructor(public firestore: Firestore) { 
    // this.updateItemWithID(3, {name: 'Super funny journal!', price: 399})
    // this.deleteItem(4)
    // this.addAllItems()
    this.getData();
  }

  async addAllItems() {
    for(let item of this.listItems){
      let result = await addDoc(this.itemCollection, item)
      console.log(result);
    }
  }
  

  async getData(){
    collectionSnapshots(this.itemCollection).subscribe((snapshot)=>{
      let result = snapshot.map(doc => doc.data());
      this.listItems = result as Item[];
      // console.log(this.listItems);
    })
  }

  async addItem(item: Item): Promise<string>{
    let statusMessage = '';
    const itemCollection = collection(this.firestore, 'items');
    await addDoc(itemCollection, item)
    .then((docRef) => {
      statusMessage = 'Item added successfully';
    })
    .catch((error) => {
      statusMessage = 'Error adding item: ' + error.message;
    });

    return statusMessage;
  }

  async getItems(){
    const itemCollection = collection(this.firestore, 'items');
    let itemSnapshot = await getDocs(itemCollection);
    let tempItem : Item[] = [];

    itemSnapshot.forEach((doc) => {
      tempItem.push(doc.data() as Item);
    }
    );
    return tempItem;
  }


  async deleteItemWithID(id: number){
    let qr = query(this.itemCollection, where('id', '==', id));
    let itemSnapshot = await getDocs(qr);
    deleteDoc(itemSnapshot.docs[0].ref)
  }


  async updateItemWithID(id: number, itemChange: any){
    let qr = query(this.itemCollection, where('id', '==', id));
    let itemSnapshot = await getDocs(qr);

    // let tempItem : Item[] = itemChange;

    updateDoc(itemSnapshot.docs[0].ref, itemChange)
  }


}
