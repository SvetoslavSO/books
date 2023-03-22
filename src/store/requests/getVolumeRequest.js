import { BASE_URL } from "../../config"

export const getVolumeRequest = async (payload) => {
  return fetch(
    `${BASE_URL}/${payload}`,
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