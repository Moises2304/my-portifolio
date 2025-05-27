import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Resumo, Home, ErrorPage, Contact } from "../page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/resumo",
    element: <Resumo />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}