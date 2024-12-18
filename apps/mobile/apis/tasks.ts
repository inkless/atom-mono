import { getApiUrl } from '@/utils/baseUrl';

interface Task {
  id: string;
  title: string;
  status: 'completed' | 'open' | 'in_progress';
}

// TODO - POC code, need better API client
export const getTasks = async () => {
  let resp;
  try {
    resp = await fetch(`${getApiUrl()}/tasks`);
  } catch (e) {
    console.log(e, 'error');
  }
  if (!resp?.ok) {
    throw new Error('Failed to fetch');
  }
  return (await resp.json()) as Task[];
};
