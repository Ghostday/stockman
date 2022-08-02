import { Response } from '@tauri-apps/api/http'


export interface ListDocuments extends Response<JSON> {
  documents: string[]
}