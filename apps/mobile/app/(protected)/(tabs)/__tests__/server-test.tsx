/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  act,
  render,
  userEvent,
  // renderRouter,
} from 'expo-router/testing-library';
import { getApiUrl } from '@/utils/baseUrl';
import ServerScreen from '../server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

jest.mock('@/utils/baseUrl');

const mockedGetApiUrl = getApiUrl as jest.Mock;

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('<ServerScreen />', () => {
  beforeAll(() => {
    mockedGetApiUrl.mockReturnValue('http://localhost');
  });

  it('should render tasks', async () => {
    const { findByText, getByText } = render(<ServerScreen />, { wrapper });
    // Somehow renderRouter does not work when pressing the userProfile
    // const { getByText, findByText } = renderRouter(
    //   {
    //     '/server': ServerScreen,
    //   },
    //   {
    //     initialUrl: '/server',
    //     wrapper,
    //   },
    // );

    const task1 = await findByText(/My Random Task 1/);
    expect(task1).toBeOnTheScreen();

    const user = userEvent.setup();

    await act(async () => {
      await user.press(getByText(/UserProfile/));
    });

    getByText('Max');
  });
});
