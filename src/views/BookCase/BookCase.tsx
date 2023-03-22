import "./BookCase.scss"
import {BookList} from "../../components/BookList/BookList";
import {BooksStore} from "../../store/BooksStore";
import {observer} from "mobx-react";
import UILoader from "../../components/ui/UILoader/UILoader";

const BookCase = observer(() => {
    return (
        <main className="book-case">
            {
                BooksStore.booksLength !== 0 ?
                    <h1 className="book-case__title">Found {BooksStore.booksLength} results</h1>
                    :
                    <h1 className="book-case__title">Enter a query, for example "js"</h1>

            }

            <div className="book-case__content">
                <BookList booksStore={BooksStore}/>
                {
                    BooksStore.isLoading &&
                    <UILoader width="30px" height="30px"/>
                }
            </div>

            {
                BooksStore.booksLength !== 0 &&
                <button
                    className="book-case__button"
                    onClick={() => BooksStore.getBooks()}
                >
                    Load more
                </button>
            }
        </main>
    )
});

export default BookCase