export interface IFile {
  _id: string;
  filename: string;
  createdById: string;
  url: string;
  signedUrl: string;
  mimetype: string;
  size: number;
  thumbnailUrl: string;
  thumbnailSignedUrl: string;
  metadata: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date | string;
}
