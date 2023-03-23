import "./BookCase.scss"
import {BookList} from "../../components/BookList/BookList";
import {observer} from "mobx-react";
import UILoader from "../../components/ui/UILoader/UILoader";
import {useEffect, useState} from "react";
import {booksStore} from "../../store/BooksStore";

const BookCase = observer(() => {

    /**
     * Определение текста подсказки для пользователя в зависимости от результатов поиска
     */
    const getTitle = () => {
        if (booksStore.books === null) {
            return "No results were found for your request"
        } else if (booksStore.isLoading) {
            return ""
        } else if (booksStore.booksLength !== 0) {
            return `Found ${booksStore.booksLength} results`
        }
        return "Enter a query, for example 'js'"
    };

    const title = getTitle()

    return (
        <main className="book-case">
            <h1 className="book-case__title">{title}</h1>

            <div className="book-case__content">
                <BookList />
                {
                    booksStore.isLoading &&
                    <UILoader width="30px" height="30px"/>
                }
            </div>

            {
                booksStore.booksLength !== 0 && booksStore.booksLength > 30 &&
                <button
                    className="book-case__button"
                    onClick={() => booksStore.getBooks()}
                >
                    Load more
                </button>
            }
        </main>
    )
});

export default BookCase