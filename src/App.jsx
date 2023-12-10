import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Terms, { loader as termsLoader } from "./pages/Terms";
import Account from "./pages/Account";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/terms",
          element: <Terms />,

          loader: termsLoader,
        },
        {
          path: "/account/myaccount",
          element: <Account />,
        },

        { path: "/about", element: <About /> },
        { path: "/partners", element: <Partners /> },
      ],
    },
    { path: "/account/login", element: <Login /> },
    {
      path: "/account/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <PageNotFound/>
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
