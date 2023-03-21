import { ReactComponent as SearchIcon } from "../../../assets/icons/searchIcon.svg"
import "./UISearcher.scss"
function UISearcher() {
    return (
        <div className="ui-searcher">
            <input className="ui-searcher__input" type="text"/>
            <button className="ui-searcher__button">
                <SearchIcon/>
            </button>
        </div>
    )
}

export default UISearcher