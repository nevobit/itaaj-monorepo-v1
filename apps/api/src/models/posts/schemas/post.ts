import { Base } from "../../../common";

export interface Comment {
 body: string;
 name: string;
 createdAt: string;
}

export interface Post extends Base{
 uuid: string;
 title: string;
 slug: string;
 category: string;
 image: string;
 views: number;
 description: string;
 content: string;
 comments: Comment[];
 likes: number;
 user_photo: string;
 user_name: string;
 language: string;
}