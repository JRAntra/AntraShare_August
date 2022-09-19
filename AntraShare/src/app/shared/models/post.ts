export interface Content {
    image: string;
    text: string;
    video: string;
}

export interface Post {
    publisherName: string;
    publishedTime: string;
    content: Content;
    comment: object[];
    likedIdList: object[];
}