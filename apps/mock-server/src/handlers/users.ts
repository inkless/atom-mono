import { http, HttpResponse } from 'msw';

export default [
  http.get('/user', () => {
    return HttpResponse.json({
      id: 'fcbb715d-c72b-4fb7-8c8f-620a036fb366',
      name: 'Max',
    });
  }),
];
