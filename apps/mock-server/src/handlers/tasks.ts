import { http, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    id: 'fa94688f-c4df-4c71-a94d-0832c5740b7a',
    title: 'My Random Task 1',
    status: 'completed',
  },
  {
    id: '3914324b-100d-4445-9f4f-2cfb180d41c2',
    title: 'My Random Task 2',
    status: 'open',
  },
  {
    id: '6402c0f3-d73d-4195-a75b-9afc8c974776',
    title: 'My Random Task 3',
    status: 'in_progress',
  },
];

export default [
  http.get('/tasks', () => {
    return HttpResponse.json(tasks);
  }),
  http.post('/tasks', async ({ request }) => {
    const task = await request.json();
    const newTask = {
      id: uuidv4(),
      title: task.title,
      status: 'open',
    };
    tasks.push(newTask);
    return HttpResponse.json(newTask);
  }),
];
