export interface ITag {
  id: number;
  name: string;
  description?: string;
}

export const getFallbackTag = (tagId: number = null): ITag => ({
  id: tagId,
  name: '...',
  description: '...'
});
