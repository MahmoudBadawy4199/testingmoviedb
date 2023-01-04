import { fireEvent, render } from '@testing-library/react-native';
import { expect, it } from '@jest/globals';
import Counter from '../src/components/Counter';

it('should increment counter', () => {
    const { getByText } = render(<Counter />);
    const incrementBtn = getByText('Increment');
    const counterText = getByText(/current count: /i);

    expect(counterText.props.children).toEqual(['Current count: ', 0]);
    fireEvent.press(incrementBtn);
    expect(counterText.props.children).toEqual(['Current count: ', 1]);
});
