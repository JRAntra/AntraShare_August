export interface Content {
    image: string;
    text: string;
    video: string;
}

export interface LikedIdList {
    userId: string;
    _id: string;
}

export interface Comment {
    content: Content;
    publisherName: string;
    publishedTime: string;
}

export interface Post {
    publisherName: string;
    publishedTime: string;
    content: Content;
    comment: Comment[];
    likedIdList: LikedIdList[];
    _id: string;
}

export interface LikeList {
    publisherName: string;
    publishedTime: string;
    content: Content;
    _id: string;
}