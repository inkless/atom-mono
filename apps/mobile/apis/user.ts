import { getApiUrl } from '@/utils/baseUrl';

interface User {
  id: string;
  name: string;
}

// TODO - POC code, need better API client
export const getUser = async () => {
  const resp = await fetch(`${getApiUrl()}/user`);
  if (!resp.ok) {
    throw new Error('Failed to fetch');
  }
  return (await resp.json()) as User;
};
