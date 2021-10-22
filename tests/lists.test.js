import supertest from 'supertest'

import app from '../src/app'

const request = supertest(app)

describe('/api/lists', () => {
	it('should an internal server error if the database is not connected', async() => {
		await request.get('/api/lists')
			.expect(500)
			.expect('Content-Type', /json/)
			.then(response => {
				expect(response.body).toEqual({error: expect.any(String)})
			})
	})
})