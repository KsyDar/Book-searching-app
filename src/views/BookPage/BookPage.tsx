import "./BookPage.scss"
import {useWindowSize} from "usehooks-ts";
import {observer} from "mobx-react";
import {Book} from "../../types/data";
import {booksStore} from "../../store/BooksStore";
import ProtectedRoute from "../../router/guards/ProtectedRoute";

const BookPage = observer(() => {
    const {width} = useWindowSize();
    const book: Book | null = booksStore.selectedBook;

    return (
        <ProtectedRoute>
            {
                book !== null &&
                <main className="book-page">
                    {
                        width > 700 &&
                        <div className="book-page__image-wrapper">
                            <div className="book-page__image">
                                <img src={book.imageLinks?.thumbnail} alt=""/>
                            </div>
                        </div>
                    }

                    <div className="book-page__info">
                        <ul className="book-page__categories">
                            {
                                book.categories && book.categories.length !== 0 ?
                                    book.categories.map((category, index) => (
                                        <li key={category}
                                            className="book-page__categories-item">
                                            {category}
                                        </li>
                                    ))
                                    :
                                    <li className="book-page__categories-item">
                                        No category
                                    </li>
                            }
                        </ul>

                        {
                            book.title ?
                                <h1 className="book-page__title">{book.title}</h1>
                                :
                                <h1 className="book-page__title">No title</h1>
                        }

                        {
                            book.authors && book.authors.length !== 0 ?
                                book.authors.map(author => (
                                    <span
                                        key={author}
                                        className="book-page__author"
                                    >
                                        {author}
                                    </span>
                                ))
                                :
                                <span className="book-page__author">No authors</span>
                        }

                        {
                            book.description ?
                                <p className="book-page__description">{book.description}</p>
                                :
                                <p className="book-page__description">No description</p>
                        }
                    </div>
                </main>
            }
        </ProtectedRoute>
    )
});

export default BookPage
