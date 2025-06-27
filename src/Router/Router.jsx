import { createBrowserRouter } from "react-router-dom";
import App from '../App'


export let router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/about',
        element: <h1>hello about</h1>
    },
    {
        path: '*',
        element: <h1>404</h1>
    }
])