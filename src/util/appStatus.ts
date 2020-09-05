export enum basicStatus {
  NONE = 'NONE'
}

export enum successStatus {
  CREATED_MANGA = 'CREATED_MANGA',
  UPDATED_MANGA = 'UPDATED_MANGA',
  CREATED_TAG = 'CREATED_TAG',
  UPDATED_TAG = 'UPDATED_TAG'
}

export enum warningStatus {
  DELETED_MANGA = 'DELETED_MANGA',
  DELETED_TAG = 'DELETED_TAG'
}

export enum dangerStatus {
  FAILED_MANGA = 'FAILED_MANGA',
  FAILED_TAG = 'FAILED_TAG'
}

export type statusType = basicStatus | successStatus | warningStatus | dangerStatus;