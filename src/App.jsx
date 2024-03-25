import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Terms, { loader as termsLoader } from "./pages/Terms";
import Account from "./pages/Account";
// import About from "./pages/About";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 1000,
    },
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/express-truck/", element: <Home /> },
        {
          path: "/express-truck/terms",
          element: <Terms />,

          loader: termsLoader,
        },
        {
          path: "/express-truck/account/myaccount",
          element: 
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
         
        },

        // { path: "/about", element: <About /> },
        { path: "/express-truck/partners", element: <Partners /> },
      ],
    },
    { path: "/express-truck/account/login", element: <Login /> },
    {
      path: "/express-truck/account/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
