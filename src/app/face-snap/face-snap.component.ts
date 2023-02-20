import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!:number;
  imageUrl!: string;
  hasLiked!: boolean;
  buttonText!: string;

ngOnInit(){
  this.title = 'Archibald';
  this.description = 'Archiblad desc';
  this.createdDate  = new Date();
  this.snaps = 6;
  this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.hasLiked = false;
  this.buttonText = "Oh Snap!";
}
// mon code
// onToggleSnap(){
//   if (this.hasLiked == false){
//       this.snaps++;
//       this.buttonText = "Oops, un Snap!"
//       this.hasLiked = true;
//   }else{
//       this.snaps--;
//       this.buttonText = "Oh Snap!"
//       this.hasLiked = false;
//   }
// }

// Solution
onSnap() {
  if (this.buttonText === 'Oh Snap!') {
    this.snaps++;
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.snaps--;
    this.buttonText = 'Oh Snap!';
  }
}
}
