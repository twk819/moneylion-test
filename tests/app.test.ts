import { test } from 'tap'
import build from '../src'

const app = build()
test('POST /feature should return 200', async (t) => {
  const data = {
    email: 'spark@email.com',
    featureName: 'finance',
  }

  const response = await app.inject({
    method: 'POST',
    url: '/feature',
    payload: data,
  })

  t.equal(response.statusCode, 200, 'returns a status code of 200')
  t.notOk(response.body)
})

test('POST /feature should return 304', async (t) => {
  const data = {
    email: 'spark2@email.com',
  }

  const response = await app.inject({
    method: 'POST',
    url: '/feature',
    payload: data,
  })

  t.equal(response.statusCode, 304, 'returns a status code of 304')
  t.notOk(response.body)
})

test('GET /feature Existed feature should be true', async (t) => {
  const data = {
    email: 'spark@email.com',
    featureName: 'finance',
  }

  const response = await app.inject({
    method: 'GET',
    url: '/feature',
    query: data,
  })

  t.ok(JSON.parse(response.body).canAccess)
})

test('GET /feature Non existant feature should be false', async (t) => {
  const data = {
    email: 'spark@email.com',
    featureName: 'admin',
  }

  const response = await app.inject({
    method: 'GET',
    url: '/feature',
    query: data,
  })

  t.notOk(JSON.parse(response.body)?.canAccess)
})

test('GET /feature Non existant email should be false', async (t) => {
  const data = {
    email: 'spark2@email.com',
    featureName: 'finance',
  }

  const response = await app.inject({
    method: 'GET',
    url: '/feature',
    query: data,
  })

  t.notOk(JSON.parse(response.body)?.canAccess)
})
