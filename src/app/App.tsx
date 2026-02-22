import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
