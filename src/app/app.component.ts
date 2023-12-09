import { Component } from '@angular/core';
import { FirebaseService } from './core/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clinic-management';
  constructor(private firebaseService: FirebaseService) {}
}
