import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import { Observable } from 'rxjs';

interface Appstate{
  message:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'downvoteRx';
  message$:Observable<string>
  constructor(private store:Store<Appstate>){
    this.message$=store.select('message')
  }

  spanishMessage(){
    this.store.dispatch({type:'SPANISH'})
  }
  frenchMessage(){
    this.store.dispatch({type:'FRENCH'})
  }
  englishMessage(){
    this.store.dispatch({type:'ENGLISH'})
  }
}

