import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
export default createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    }
]);
