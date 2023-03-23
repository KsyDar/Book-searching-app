import {ReactComponent as SearchIcon} from "../../assets/icons/searchIcon.svg"
import "./BookSearcher.scss"
import {useState} from "react";
import {observer} from "mobx-react";
import {useLocation, useNavigate} from "react-router";
import {booksStore} from "../../store/BooksStore";


const BookSearcher = observer(() => {
    const [value, setValue] = useState<string>("");

    const location = useLocation();
    const navigate = useNavigate();

    /**
     * Функция поиска книг
     */
    const search = async () => {
        if (location.pathname !== "/") {
            navigate("/")
        }
        booksStore.setSearch(value, "value");
        await booksStore.getBooks();
    }

    return (
        <form
            className="ui-searcher"
            onSubmit={(e) => {
                e.preventDefault();
                search();
            }}
        >
            <input
                className="ui-searcher__input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                className="ui-searcher__button"
                type="button"
                onClick={() => search()}
            >
                <SearchIcon/>
            </button>
        </form>
    )
})

export default BookSearcher