export declare enum Status {
    OPEN = "open",
    CLOSED = "closed"
}
export declare enum Type {
    RESCHEDULE = "reschedule",
    LATE = "late",
    CONFIRM = "confirm",
    OTHER = "other"
}
export declare enum ResolveReason {
    OPENED_INCORRECTLY = "1",
    REQUEST_FULFILLED = "2",
    OPEN_TOO_LONG = "3",
    OTHER = "4"
}
export interface IRequest {
    _id?: string;
    type?: Type;
    createdById?: string;
    channelId?: string;
    parentId: string;
    childId: string;
    status: Status;
    therapyList: string[];
    assignedId?: string;
    metadata?: any;
    resolvedReason?: string;
    firstResponseAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare const getFallbackRequest: (_id?: string, channelId?: string) => {
    _id: string;
    type: Type;
    createdById: any;
    channelId: string;
    parentId: any;
    childId: any;
    status: Status;
    therapyList: any[];
    assignedId: any;
    metadata: {};
};
