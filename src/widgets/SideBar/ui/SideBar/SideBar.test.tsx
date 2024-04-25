import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from '@/widgets/SideBar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('SideBar', () => {
    test('should render correctly', async () => {
        componentRender(<SideBar />);
        const sidebarElement = screen.getByTestId('SideBar');
        expect(sidebarElement).toBeInTheDocument();
    });

    test('toggle test', async () => {
        componentRender(<SideBar />);
        const button = screen.getByTestId('side-bar-button');

        fireEvent.click(button);

        const sideBar = screen.getByTestId('SideBar');

        expect(sideBar).toHaveClass('collapsed');
    });
});
