import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from '@/widgets/SideBar';
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('SideBar', () => {
    test('should render correctly', async () => {
        renderWithTranslation(<SideBar />);
        const sidebarElement = screen.getByTestId('SideBar');
        expect(sidebarElement).toBeInTheDocument();
    });

    test('toggle test', async () => {
        renderWithTranslation(<SideBar />);
        const button = screen.getByTestId('side-bar-button');

        fireEvent.click(button);

        const sideBar = screen.getByTestId('SideBar');

        expect(sideBar).toHaveClass('collapsed');
    });
});
