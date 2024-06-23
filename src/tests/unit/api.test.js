// api.test.js
// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';
// import { fetchData } from '../../api/api';

// describe('fetchData', () => {
//   it('fetches successfully data from an API', async () => {
//     const mock = new MockAdapter(axios);
//     const data = { foo: 'bar' };
//     mock.onGet('/data').reply(200, data);

//     const result = await fetchData();
//     expect(result).toEqual(data);
//   });

//   it('throws an error if the request fails', async () => {
//     const mock = new MockAdapter(axios);
//     mock.onGet('/data').reply(500);

//     await expect(fetchData()).rejects.toThrow();
//   });
// });
