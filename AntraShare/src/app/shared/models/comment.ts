export interface Comment {
    publisherName: string;
    content: {
        text: string;
        image: string;
        video: string;
    }
    publishedTime: string;
}