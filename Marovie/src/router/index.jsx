import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from "../pages/Home";
import Detail from "../pages/Detail";
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
        ]
    },
]);
export default router;