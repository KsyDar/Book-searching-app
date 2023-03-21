import {createBrowserRouter} from "react-router-dom";
import BookList from "../views/BookList/BookList";
import BookPage from "../views/BookPage/BookPage";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <BookList/>,
            },
            {
                path: "/:bookId",
                element: <BookPage/>,
            },
        ]
    },
]);

export default router