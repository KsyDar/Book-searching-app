import "./BookCard.scss"
import {Book} from "../../types/data";
import {useNavigate} from "react-router";

type PropType = {
    /** Книга */
    book: Book;
    /** Событие при клике на карточку */
    onSelect: (book: Book) => void;
}

function BookCard(props: PropType) {
    const navigate = useNavigate();

    /**
     * Функция перехода на страницу книги
     * @param book
     */
    const goToBookPage = (book: Book) => {
        props.onSelect(book);
        navigate(`/:${props.book.id}`);
    }

    return (
        <div
            className="ui-card"
            onClick={() => goToBookPage(props.book)}
        >
            <div className="ui-card__image">
                <img src={props.book.imageLinks?.smallThumbnail} alt=""/>
            </div>

            {
                props.book.categories ?
                    <span className="ui-card__category">
                        {props.book.categories[0]}
                    </span> :
                    <span className="ui-card__category">
                        No category
                    </span>
            }

            {
                props.book.title ?
                    <div className="ui-card__description">
                        {props.book.title}
                    </div> :
                    <div className="ui-card__description">
                        No title
                    </div>
            }

            <span className="ui-card__author">{props.book.authors?.[0]}</span>
        </div>
    )
}

export default BookCard