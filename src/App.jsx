import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
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
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home />, errorElement: <Error /> },
        {
          path: "/terms",
          element: <Terms />,
          errorElement: <Error />,
          loader: termsLoader,
        },
        {
          path: "/account/myaccount",
          element: <Account />,
          errorElement: <Error />,
        },

        { path: "/about", element: <About />, errorElement: <Error /> },
        { path: "/partners", element: <Partners />, errorElement: <Error /> },
      ],
    },
    { path: "/account/login", element: <Login />, errorElement: <Error /> },
    {
      path: "/account/signup",
      element: <SignUp />,
      errorElement: <Error />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
