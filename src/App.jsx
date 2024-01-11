import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import AppLayout from './Layout/AppLayout';
import Error from './ui/Error';

const route = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={route} />
      <Toaster position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#18212f",
            color: "#e5e7eb",
          }
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
