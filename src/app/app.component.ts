import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import { Observable } from 'rxjs';
import{ Post } from './post.model';
import * as PostActions from './post.actions';

interface Appstate{
  message:string,
  post:Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'downvoteRx';
  message$:Observable<string>;
  post:Observable<Post>;
  bob:string;

  constructor(private store:Store<Appstate>){
    this.message$=store.select('message')
    this.post=store.select('post')
  }

  editText(){
    console.log(this.bob);
    this.store.dispatch(new PostActions.EditText(this.bob));
  }
  upvote(){
    this.store.dispatch(new PostActions.Upvote());
  }
  downvote(){
    this.store.dispatch(new PostActions.Downvote());
  }
  reset(){
    this.store.dispatch(new PostActions.Reset())
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

