import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getAllItems(collection: string): Observable<any[]> {
    return this.firestore.collection(collection).valueChanges();
  }

  getItemById(itemId: string, collection: string): Observable<any> {
    return this.firestore.collection(collection).doc(itemId).valueChanges();
  }

  createItem(item: any, collection: string): Promise<any> {
    const itemId = this.firestore.createId();
    item.id = itemId;
    return this.firestore.collection(collection).doc(itemId).set(item);
  }

  updateItem(itemId: string, item: any, collection: string): Promise<void> {
    return this.firestore.collection(collection).doc(itemId).update(item);
  }

  deleteItem(itemId: string, collection: string): Promise<void> {
    return this.firestore.collection(collection).doc(itemId).delete();
  }
}
