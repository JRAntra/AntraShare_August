export interface NewsFeedStory {
  userInfo: userInfo;
  publisherName: string;
  publishedTime: string;
  commentNumber: number;
}

export interface userInfo {
  name: string;
  admin: boolean;
}
