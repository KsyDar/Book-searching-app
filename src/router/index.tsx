import {createBrowserRouter} from "react-router-dom";
import BookCase from "../views/BookCase/BookCase";
import BookPage from "../views/BookPage/BookPage";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <BookCase/>,
            },
            {
                path: "/:bookId",
                element: <BookPage/>,
            },
        ]
    },
]);

export default router