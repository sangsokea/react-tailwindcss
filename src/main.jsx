import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Layout from "./components/layout/Layout.jsx";
import Service from "./pages/services/Service.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/home/Home.jsx";
import ProductDetails from "./pages/product/ProductDetails.jsx";
import Signup from "./pages/auth/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>  
      },
      {
        path: "/detail",
        element: <ProductDetails/>
      },
      {
        path: "app",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
