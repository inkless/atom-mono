import { renderRouter, screen, userEvent } from 'expo-router/testing-library';
import { Text, View } from 'react-native';
import SignIn from '../login';

const MockComponent = jest.fn(() => (
  <View>
    <Text>Index</Text>
  </View>
));

describe('<Signin />', () => {
  it('should render two sign in button', () => {
    const { getByText } = renderRouter(
      {
        index: MockComponent,
        '/login': SignIn,
      },
      {
        initialUrl: '/login',
      },
    );

    expect(screen).toHavePathname('/login');

    getByText('Sign In');
    getByText('Sign In with Browser');
  });

  it('should sign in and redirect', async () => {
    const { getByText } = renderRouter(
      {
        index: MockComponent,
        '/login': SignIn,
      },
      {
        initialUrl: '/login',
      },
    );

    const user = userEvent.setup();
    await user.press(getByText('Sign In'));

    getByText('Index');
  });
});
