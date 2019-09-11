export interface ITag {
  _id: number;
  name: string;
  description?: string;
}

export const getFallbackTag = (tagId: number = null): ITag => ({
  _id: tagId,
  name: '...',
  description: '...'
});
