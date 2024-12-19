import '@testing-library/react-native/extend-expect';
import { server } from '@atom/mock-server/server';
import { getApiUrl } from '@/utils/baseUrl';

jest.mock('@/utils/baseUrl');

beforeAll(() => {
  // in jest test, there's no host uri, we just mock it
  (getApiUrl as jest.Mock).mockReturnValue('http://localhost');

  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
