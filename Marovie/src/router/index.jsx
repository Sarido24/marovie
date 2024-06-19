import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Genre from "../pages/Genre";
import Favorite from "../pages/Favorite";
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:id",
                element: <Detail />,
            },
            {
                path: "/genre",
                element: <Genre />,
            },
            {
                path: "/favorite",
                element: <Favorite />,
            },
        ]
    },
]);
export default router;