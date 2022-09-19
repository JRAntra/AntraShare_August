export interface NewsfeedStory {
    publisherName: string;
    content: {
        text: string;
        image: string;
        video: string;
    }
    publishedTime: string;
    comment: object[];
    likedIdList:[ 
        {
            userId: string;
        }
    ]
}
