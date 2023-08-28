import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {

  videos = [
    { title: 'Core Java', share: 415, likes: 5666, dislikes: 412, thumbnail: 'assets/feedbacks/javavideo.jpg' },
    { title: 'C# Basics', share: 345, likes: 4333, dislikes: 123, thumbnail: 'assets/feedbacks/csharpvideo.jpg' },
    { title: 'Complete Python', share: 405, likes: 2235, dislikes: 212, thumbnail: 'assets/feedbacks/pythonvideo.jpg' },

  ]

  mostLikedVideo = this.getmostlikedVideo();

  getmostlikedVideo() {
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];

  }

}
