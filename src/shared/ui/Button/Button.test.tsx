import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button/Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
    test('renders correctly', () => {
        render(<Button theme="clear">Button</Button>);
        const buttonElement = screen.getByText('Button');
        expect(buttonElement).toBeInTheDocument();
    });
    test('should be clear class', () => {
        render(<Button theme="clear">Button</Button>);
        const buttonElement = screen.getByText('Button');
        expect(buttonElement).toHaveClass('clear');
    });
});
