import { Component } from '@angular/core';

class Post {
  //fields 
  title:string; 
  content:string;
  loveIts:number;
  creationDate:Date;
  // constructor
  constructor(title: string, content: string, loveIts: number) { 
  	this.title = title;
  	this.content = content;
  	this.loveIts = loveIts; 
  	this.creationDate = new Date(); 
  }
}

type Posts = Array<Post>; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  myPosts: Posts = [
    new Post('Post 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum, nulla ac consectetur mollis, orci urna egestas dui, eget aliquet nisi ex id massa. Nam mollis, enim in ornare convallis, lacus est volutpat nunc, et vehicula magna dolor ut quam. Praesent ut tellus lacus. In hac habitasse platea dictumst. Nunc id ante molestie, ultrices leo in, eleifend magna. Nulla diam tortor, ornare sit amet eleifend et, molestie a ex. Aliquam magna odio, laoreet sit amet ipsum sit amet, feugiat vulputate ipsum. In hac habitasse platea dictumst. Donec id consequat velit. Nulla ut lectus a nisi efficitur fermentum sit amet vel ex.', 1), 
    new Post('Post 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum, nulla ac consectetur mollis, orci urna egestas dui, eget aliquet nisi ex id massa. Nam mollis, enim in ornare convallis, lacus est volutpat nunc, et vehicula magna dolor ut quam. Praesent ut tellus lacus. In hac habitasse platea dictumst. Nunc id ante molestie, ultrices leo in, eleifend magna. Nulla diam tortor, ornare sit amet eleifend et, molestie a ex. Aliquam magna odio, laoreet sit amet ipsum sit amet, feugiat vulputate ipsum. In hac habitasse platea dictumst. Donec id consequat velit. Nulla ut lectus a nisi efficitur fermentum sit amet vel ex.', -1), 
    new Post('Post 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum, nulla ac consectetur mollis, orci urna egestas dui, eget aliquet nisi ex id massa. Nam mollis, enim in ornare convallis, lacus est volutpat nunc, et vehicula magna dolor ut quam. Praesent ut tellus lacus. In hac habitasse platea dictumst. Nunc id ante molestie, ultrices leo in, eleifend magna. Nulla diam tortor, ornare sit amet eleifend et, molestie a ex. Aliquam magna odio, laoreet sit amet ipsum sit amet, feugiat vulputate ipsum. In hac habitasse platea dictumst. Donec id consequat velit. Nulla ut lectus a nisi efficitur fermentum sit amet vel ex.', 0)
  ]

}
