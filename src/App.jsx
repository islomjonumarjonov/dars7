import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import SingleImage from "./pages/SingleImage";
import Liked from "./pages/Liked";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          index: true,
          element: <Home />,
        },
        {
          path: "singlepage/:id",
          element: <SingleImage />,
        },
        {
          path: "likedImages",
          element: <Liked />,
        },
      ],
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;
