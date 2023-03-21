import "./BookPage.scss"
import {useWindowSize} from "usehooks-ts";

function BookPage() {
    const { width } = useWindowSize();

    return (
        <main className="book-page">
            {
                width > 700 &&
                <div className="book-page__image">
                    <div className="book-page__image-wrapper">
                        <img src="" alt=""/>
                    </div>
                </div>
            }

            <div className="book-page__info">
                <ul className="book-page__categories">
                    <li className="book-page__categories-item">Category1</li>
                    <li className="book-page__categories-item">Category2</li>
                </ul>
                <h1 className="book-page__title">Title title title</h1>
                <span className="book-page__author">Author author author</span>
                <p className="book-page__description">Description Description Description Description Description Description Description Description
                    Description</p>
            </div>
        </main>
    )
}

export default BookPage