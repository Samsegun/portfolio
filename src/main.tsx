import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import "./index.css";
import Layout from "./components/Layout.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Projects from "./routes/Projects.tsx";
import Contact from "./routes/Contact.tsx";
import ErrorPage from "./routes/error-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
                // errorElement: <ErrorPage />,
            },
            {
                path: "/about",
                element: <About />,
                // errorElement: <ErrorPage />,
            },
            {
                path: "/projects",
                element: <Projects />,
                // errorElement: <ErrorPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
                // errorElement: <ErrorPage />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
