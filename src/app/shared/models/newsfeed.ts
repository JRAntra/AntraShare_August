export interface NewsfeedStory {
    publisherName: string;
    content: {
        text: string;
        image: string;
        video: string;
    }
    publishedTime: string;
    comment: Comment[];
    likedIdList:[ 
        {
            userId: string;
        }
    ]
}