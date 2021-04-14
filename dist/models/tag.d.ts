export interface ITag {
    id: number;
    name: string;
    description?: string;
}
export declare const getFallbackTag: (tagId?: number) => ITag;
