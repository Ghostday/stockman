import { Response } from '@tauri-apps/api/http'

export interface DocResponse<T> extends Response<Documents<T>> {

}

export interface Documents<T> {
  documents: Document<T>[]
}

export interface Document<T = any> {
  name: string;
  createTime: Date;
  updateTime: Date;
  fields: T;
}

export interface Auth {
  name: string;
  lastLoggedIn: Date;
  pin: string;
}
