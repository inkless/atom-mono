import { useSession } from '@/contexts/Auth';
import { getBaseUrl } from '@/utils/baseUrl';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import * as Browser from 'expo-web-browser';

export const browserSignIn = async () => {
  const signInUrl = `${getBaseUrl()}/login`;
  const redirectTo = Linking.createURL('/login');
  const result = await Browser.openAuthSessionAsync(
    `${signInUrl}?atom-redirect=${encodeURIComponent(redirectTo)}`,
    redirectTo,
  );

  if (result.type !== 'success') return false;
  const url = Linking.parse(result.url);
  const sessionToken = String(url.queryParams?.access_token);
  if (!sessionToken) throw new Error('No session token found');

  return sessionToken;
};

export const useBrowserSignIn = () => {
  const router = useRouter();
  const { setSession } = useSession();

  return async () => {
    const token = await browserSignIn();
    if (!token) return;

    setSession(token);

    router.replace('/');
  };
};
