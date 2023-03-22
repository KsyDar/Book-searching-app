import "./BookPage.scss"
import {useWindowSize} from "usehooks-ts";
import {observer} from "mobx-react";
import {Book} from "../../types/data";
import {BooksStore} from "../../store/BooksStore";

const BookPage = observer(() => {
    const {width} = useWindowSize();
    const book: Book | null = BooksStore.selectedBook;

    return (
        <>
            {
                book !== null &&
                <main className="book-page">
                    {
                        width > 700 &&
                        <div className="book-page__image">
                            <div className="book-page__image-wrapper">
                                <img src={book.imageLinks?.thumbnail} alt=""/>
                            </div>
                        </div>
                    }

                    <div className="book-page__info">
                        <ul className="book-page__categories">
                            {
                                book.categories && book.categories.length !== 0 ?
                                    book.categories.map(category => (
                                        <li key={book.categories?.indexOf(category)}
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

                        <h1 className="book-page__title">{book.title}</h1>

                        {
                            book.authors && book.authors.length !== 0 ?
                                book.authors.map(author => (
                                    <span
                                        key={book.authors?.indexOf(author)}
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
        </>
    )
});

export default BookPage
