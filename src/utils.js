const BASE_URL = 'https://ghibliapi.herokuapp.com'

export const get = url =>
  fetch(BASE_URL + url, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(r => r.json())
