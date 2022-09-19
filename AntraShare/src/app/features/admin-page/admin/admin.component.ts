import { Component, Input, OnInit } from '@angular/core';
// import { UserprofilesService } from '../userprofiles.service';
// interface Post {
//   publisherName: string;
//   content: {
//     text: string;
//     image: string;
//     video: string;
//   };
//   publishedTime: string;
//   comment: object[];
//   likedIdList: object[];
// }
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  // postlist: Post[] = [];
  // constructor(private service: UserprofilesService) {}

  ngOnInit(): void {
    // console.log(this.post?.publisherName)
  }
  // @Input() post? : Post;
  public showlist = true;

  userslist = [
    {
      name: 'Piebaconcookie',
      email: 'richardwu90@gmail.com',
      function: 'delete'
    },
    {
      name: 'Banana',
      email: 'banana@slug.com',
      function: 'delete'
    },
    {
      name: 'Minneapolis',
      email: 'notBurntToRuins@hotmail.com',
      function: 'delete'
    },
    {
      name: 'Ice Cream',
      email: 'icecream@soda.com',
      function: 'delete'
    },
  
  ]

}
