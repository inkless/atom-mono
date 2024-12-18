import { API_URL } from './constants';

interface User {
  id: string;
  name: string;
}

// TODO - POC code, need better API client
export const getUser = async () => {
  const resp = await fetch(`${API_URL}/user`);
  if (!resp.ok) {
    throw new Error('Failed to fetch');
  }
  return (await resp.json()) as User;
};
