import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://api.test.cyberia.studio/api/v1'
})
