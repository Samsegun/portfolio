import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Layout from "./components/Layout.tsx";
import "./index.css";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import ErrorPage from "./routes/error-page.tsx";
import Home from "./routes/Home.tsx";
import Projects from "./routes/Projects.tsx";
import Resume from "./routes/Resume.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

// console.log(Home());

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
