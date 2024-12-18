/* eslint-disable no-undef */

import '@testing-library/react-native/extend-expect';
import { server } from '@atom/mock-server/server';

beforeAll(() => {
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
