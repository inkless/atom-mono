import { render } from '@testing-library/react-native';

import { ThemedText } from '../ThemedText';

describe('<ThemedText />', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ThemedText>Some Text Here!</ThemedText>);
    getByText(/Some Text/);
  });
});
