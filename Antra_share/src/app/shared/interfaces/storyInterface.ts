// do not name these Interface
export interface storyInterface {
    _id : string, // will not be used
    publisherName : string,
    content : contentInterface,
    comment : commentInterface[],
    publishedTime : string,
    likedIdList : likeInterface[]
}

// ? for optional
export interface contentInterface {
    image?: string,
    video?: string,
    text?: string,
    _id: string // will not be used
}

export interface commentInterface {
    publisher : string,
    content : contentInterface,
    _id: string, // will not be used
    publishedTime : string
}

// these below will not actually be used for now
export interface likeInterface {
    userId : string,
    _id : string
}