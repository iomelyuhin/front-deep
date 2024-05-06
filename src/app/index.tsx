import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'app/styles/index.scss';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/ui/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from '@/shared/providers/StoreProvider';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>

        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
