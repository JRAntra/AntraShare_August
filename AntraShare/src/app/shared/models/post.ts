export interface Content {
    text?: string;
    image?: string;
    video?: string;
    _id?: string;
}

export interface LikedIdList {
    userId: string;
    _id: string;
}

export interface Comment {
    content: Content;
    publisherName: string;
    publishedTime: string;
    _id: string;
}

export interface Post {
    publisherName?: string;
    publishedTime?: string;
    content?: Content;
    comment?: Comment[];
    likedIdList?: LikedIdList[];
    _id?: string;
}

export interface LikeList {
    publisherName: string;
    publishedTime: string;
    content: Content;
    _id: string;
}