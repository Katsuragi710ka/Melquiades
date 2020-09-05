interface TagEntity {
  id?: number
  nameJa: string
  nameEn: string
  parentTagId: number
}

interface reduxAction<T> {
  name: string;
  action: (...args: any) => { type: string, payload: T };
}