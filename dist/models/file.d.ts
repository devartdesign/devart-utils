export declare enum FileStatus {
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
export declare const getFallbackFile: (file?: Partial<IFile>) => IFile;
