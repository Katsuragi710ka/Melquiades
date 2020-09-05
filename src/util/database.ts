import Dexie from 'dexie';

export enum TableName {
  Tags = "tags"
}

export type TableEntity = TagEntity;

class AppDataBase extends Dexie {
  public tags: Dexie.Table<TagEntity, number>;

  constructor() {
  	super('Melquiades DB');

  	// テーブルとインデックスを定義する
  	this.version(1).stores({
  		tags: '++id, nameJa, nameEn, parentTagId'
  	});
  	this.tags = this.table("tags");
  }
	
  async selectAllEntities(tableName: TableName): Promise<any[]> {
  	return await this[tableName].toArray();
  }

  insertEntity(tableName: TableName, entity: TableEntity): void {
  	this[tableName].add(entity);
  }
}

export const appDB = new AppDataBase;