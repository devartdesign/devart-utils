"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileStatus;
(function (FileStatus) {
    FileStatus[FileStatus["INACTIVE"] = 0] = "INACTIVE";
    FileStatus[FileStatus["PROGRESS"] = 1] = "PROGRESS";
    FileStatus[FileStatus["SUCCESS"] = 2] = "SUCCESS";
    FileStatus[FileStatus["FAIL"] = 3] = "FAIL";
})(FileStatus = exports.FileStatus || (exports.FileStatus = {}));
exports.getFallbackFile = (file = {
    file: { name: '' },
    uploadId: null,
    status: FileStatus.INACTIVE,
    error: null
}) => ({
    id: `${Date.now()}-${file.file.name}`,
    uploadId: file.uploadId,
    file: file.file,
    progress: 0,
    status: file.status,
    error: file.error
});
//# sourceMappingURL=file.js.map