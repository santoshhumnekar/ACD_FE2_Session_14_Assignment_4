import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   userData = [];
  
  constructor(private _data : DataService) {}

  get(){

    this._data.getDataa()
    .subscribe(res => this.userData = res);

  };

  post(){

    this._data.postJSON()
    .subscribe(res => this.userData = res);

  }

}
