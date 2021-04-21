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

export const getFallbackFile = ({
  file,
  uploadId = null,
  status = FileStatus.INACTIVE,
  error = null
}: Partial<IFile>): IFile => ({
  id: `${Date.now()}-${file.name}`,
  uploadId,
  file: file,
  progress: 0,
  status,
  error
});
