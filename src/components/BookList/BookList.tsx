import {observer} from "mobx-react";
import BookCard from "../BookCard/BookCard";
import "./BookList.scss"
import {booksStore} from "../../store/BooksStore";

export const BookList = observer(() => {
    return (
        <ul className="book-list">
            {
                booksStore.books?.length !== 0 &&
                booksStore.books?.map(book => (
                    <li key={book.etag}>
                        <BookCard
                            book={book}
                            onSelect={(book) => booksStore.setSelectedBook(book)}
                        />
                    </li>
                ))
            }
        </ul>
    )
})