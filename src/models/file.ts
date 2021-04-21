export enum FileStatus {
  INACTIVE = 0,
  PROGRESS = 1,
  SUCCESS = 2,
  FAIL = 3
}

export interface IFile {
  id: string;
  uploadId: string;
  file: File;
  progress: number;
  status: FileStatus;
  error: any;
}

export const getFallbackFile = (file: Partial<IFile> = {
  file: { name: '' } as any,
  uploadId: null,
  status: FileStatus.INACTIVE,
  error: null
}): IFile => ({
  id: `${Date.now()}-${file.file.name}`,
  uploadId: file.uploadId,
  file: file.file,
  progress: 0,
  status: file.status,
  error: file.error
});
