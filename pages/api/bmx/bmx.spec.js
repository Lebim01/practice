const axios = require("axios");

describe('Api BMX', () => {

  test('get catalog', async () => {
    const res = await axios.get('/api/bmx')
    expect(res.status).toBe(200)
  });

  describe('series', () => {
    const serieId = 'SG46'

    test('get serie metadata', async () => {
      const res = await axios.get(`/api/bmx/${serieId}`)
      expect(res.status).toBe(200)
    })

    test('get serie datos', async () => {
      const res = await axios.get(`/api/bmx/${serieId}/datos`)
      expect(res.status).toBe(200)
    })
  })
})