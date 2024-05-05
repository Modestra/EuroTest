import { HTTP } from '@app/http'

export function getProjects() {
  return HTTP.get('/projects/', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getCategories() {
  return HTTP.get('/project-categories/', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
