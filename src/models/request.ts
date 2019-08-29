export enum Status {
  OPEN = 'open',
  CLOSED = 'closed'
}

export enum Type {
  RESCHEDULE = 'reschedule',
  LATE = 'late',
  CONFIRM = 'confirm',
  OTHER = 'other'
}

export enum ResolveReason {
  OPENED_INCORRECTLY = '1',
  REQUEST_FULFILLED = '2',
  OPEN_TOO_LONG = '3',
  OTHER = '4'
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

export const getFallbackRequest = (_id?: string, channelId?: string) => ({
  _id,
  type: Type.CONFIRM,
  createdById: null,
  channelId,
  parentId: null,
  childId: null,
  status: Status.OPEN,
  therapyList: [],
  assignedId: null,
  metadata: {}
});
