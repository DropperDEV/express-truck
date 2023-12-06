import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import Terms, { loader as termsLoader } from "./features/terms/Terms";
import Account from "./features/account/Account";
import About from "./features/about/About";
import Partners from "./features/partners/Partners";
import Login from "./features/account/Login";
import SignUp from "./features/account/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
