export interface Post {
    _id: string;
    publisherName: string;
    publishedTime: string;
}

export interface NewsfeedStory extends Post {
    content: Content;
    comment: Comment[];
    likedList: Likes[];
}

export interface Content {
    image: string;
    video: string;
    text: string;
    _id: string;
}

export interface Comment extends Post{
    content: Content;
}

export interface Likes {
    userId: string;
    _id: string;
}

export interface NewsfeedStoryList {
    storyList: NewsfeedStory
}