import type { FeedbackForm } from '@/entities/feedback'
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

export function postFeedback(form: FeedbackForm) {
  return HTTP.post(
    `/feedbacks?phone=${form.phone}&email=${form.email}&message=${form.message}`,
    form,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
