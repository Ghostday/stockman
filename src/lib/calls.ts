import { Product, DocResponse, Auth } from '../types'
import { unpackDocument } from '../lib/utils'
import { http } from '@tauri-apps/api'

const apiURL = 'https://firestore.googleapis.com/v1/'
const projectId = import.meta.env.FIREBASE_projectId

const client = await http.getClient()

export async function getDocs(collection: string) {
  const url = `${apiURL}projects/${projectId}/databases/(default)/documents/${collection}`
  const response: DocResponse<Product> = await client.get(url);
  const docs = response.data.documents.map(doc => {
    return unpackDocument(doc)
  })
  return docs
}

// TODO: Create a call to ensure the PIN entered is valid
export async function loginUser(pin: string) {
  const url = `${apiURL}projects/${projectId}/databases/(default)/documents/users/`
  const response: DocResponse<Auth | any> = await client.get(url);
  console.log(response.data.documents)
  let user = response.data.documents.find(doc => {
    return doc.fields.pin.stringValue === pin
  })
  if (user) {
    user = unpackDocument(user)
    return user.fields
  }
  // Returns a name if logged in, ELSE returns false

}
