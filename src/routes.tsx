import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Resumo, Home, ErrorPage, Contacto, Projecto } from "../page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contacto />,
  },
  {
    path: "/resumo",
    element: <Resumo />,
  },
  {
    path: "/project",
    element: <Projecto />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}