import supertest from 'supertest'

import app from '../src/app'

const request = supertest(app)

describe('/api', () => {
	test('resource not found', async() => {
		await request.get('/api')
			.expect(404)
			.expect('Content-Type', /json/)
			.then(response => {
				expect(response.body).toEqual({error: expect.any(String)})
			})
	})
})