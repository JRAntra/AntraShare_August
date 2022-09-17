export interface Post {
    publisherName: string;
    content: {
        text: string;
        image: string;
        video: string;
    };
    publishedTime: string;
    comment: object[];
    likedIdList: object[];
}