import {observer} from "mobx-react";
import {booksStore} from "../../store/BooksStore";
import {Navigate} from "react-router";

type PropType = {
    children: any;
}

/**
 * функция, проверяющая наличие выбранной книги при переходе на страницу книги
 */
const ProtectedRoute = observer((props: PropType) => {
    if (booksStore.selectedBook === null) {
        return <Navigate to="/" replace/>;
    } else {
        return props.children
    }
});

export default ProtectedRoute