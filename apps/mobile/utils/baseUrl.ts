import Constants from 'expo-constants';
import { Platform } from 'react-native';

const getHostUri = () => {
  if (Platform.OS === 'web') {
    return `http://${location.hostname}`;
  }

  /**
   * Gets the IP address of your host-machine. If it cannot automatically find it,
   * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
   * you don't have anything else running on it, or you'd have to change it.
   */
  const debuggerHost = Constants.expoConfig?.hostUri;
  const localhost = debuggerHost?.split(':')[0];

  if (!localhost) {
    throw new Error(
      'Failed to get localhost. Please use development client and run in local machine.',
    );
  }
  return `http://${localhost}`;
};

/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
export const getWebUrl = () => {
  if (process.env.EXPO_PUBLIC_WEB_URL) {
    return process.env.EXPO_PUBLIC_WEB_URL;
  }

  return `${getHostUri()}:4000`;
};

export const getApiUrl = () => {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  return `${getHostUri()}:9090`;
};
