export interface IPost {
    _id: number;
    title: string;
    post: string;
    year: number;
    month: number;
    day: number;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}
