/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { userEvent, waitFor, renderRouter } from 'expo-router/testing-library';
import { wrapper } from '@/testUtils/renderWrapper';
import ServerScreen from '../server';

describe('<ServerScreen />', () => {
  it('should render tasks', async () => {
    const { getByText, findByText } = renderRouter(
      {
        '/server': ServerScreen,
      },
      {
        initialUrl: '/server',
        wrapper,
      },
    );

    const task1 = await findByText(/My Random Task 1/);
    expect(task1).toBeOnTheScreen();

    const user = userEvent.setup();

    await user.press(getByText(/UserProfile/));
    await waitFor(() => {
      getByText('Max');
    });
  });
});
