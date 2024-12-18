import { API_URL } from './constants';

interface Task {
  id: string;
  title: string;
  status: 'completed' | 'open' | 'in_progress';
}

// TODO - POC code, need better API client
export const getTasks = async () => {
  const resp = await fetch(`${API_URL}/tasks`);
  if (!resp.ok) {
    throw new Error('Failed to fetch');
  }
  return (await resp.json()) as Task[];
};
