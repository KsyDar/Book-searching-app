import {ReactComponent as SearchIcon} from "../../../assets/icons/searchIcon.svg"
import "./UISearcher.scss"
import {useState} from "react";
import {observer} from "mobx-react";
import {BooksStoreClass} from "../../../store/BooksStore";
import {useLocation, useNavigate} from "react-router";

type PropType = {
    booksStore: BooksStoreClass;
}
const UISearcher = observer((props: PropType) => {
    const [value, setValue] = useState<string>("");

    const location = useLocation();
    const navigate = useNavigate();
    const search = () => {
        if (location.pathname !== "/") {
            navigate("/")
        }
        props.booksStore.resetStore();
        props.booksStore.setSearch(value, "value");
        props.booksStore.getBooks();
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

export default UISearcher