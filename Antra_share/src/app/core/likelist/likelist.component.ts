import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { storyInterface } from 'src/app/shared/interfaces/storyInterface';
import { NewsfeedService } from 'src/app/shared/services/newsfeed.service';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnDestroy {
  @ViewChild('likelist') box! : ElementRef<HTMLDivElement>;

  constructor() {}

  private hidden : boolean = true;
  public likedStories : storyInterface[] = [];
  public testPublisherName : string= "Publisher Name";
  public testPublisherTime : string= "Published Time";
  public testContent : string = "If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways. For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool."

  // functions to allow other components to show and hide
  public toggleHide() {
    if(this.isHidden())
      this.show();
    else
      this.hide();
  }
  public show() {
    this.box.nativeElement.style.display = "block";
    this.hidden = false;
  }
  public hide() {
    this.box.nativeElement.style.display = "none";
    this.hidden = true;
  }

  // getter for the boolean
  public isHidden() {
    return this.hidden;
  }

  // functions for handling storing stories
  onAddStory(story : storyInterface) {
    this.likedStories.push(story);
  }
  onRemoveStory(el: ElementRef) {
    el.nativeElement.remove();
  }

  ngOnDestroy(): void {
    this.likedStories.length = 0; // completely clear the array, just in case
  }

}
