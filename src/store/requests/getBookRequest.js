import { BASE_URL } from "../../config"

export const getBookRequest = async (payload) => {
  return fetch(
    `${BASE_URL}?q=${`${payload.type !== 'all' ? `${payload.text}+subject:${payload.type}` : `${payload.text}`}`}${payload.sort !== '' ? `&orderBy=${payload.sort}` : ''}&maxResults=30&startIndex=${payload.currentChunk * 30}`,
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(data => {
    return data.text();
  }).then(data => {
    return JSON.parse(data)
  }).catch(error => {
    throw new Error (error)
  })
}