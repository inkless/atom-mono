import { http, HttpResponse } from 'msw';
import { getApiUrl } from '../api';

export default [
  http.get(getApiUrl('/user'), () => {
    return HttpResponse.json({
      id: 'fcbb715d-c72b-4fb7-8c8f-620a036fb366',
      name: 'Max',
    });
  }),
];
