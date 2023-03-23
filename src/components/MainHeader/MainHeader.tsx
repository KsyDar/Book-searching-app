import "./MainHeader.scss"
import BookSearcher from "../BookSearcher/BookSearcher";
import UISelect from "../ui/UISelect/UISelect";
import {HasIdName} from "../../types/data";
import { v4 } from "uuid";
import {booksStore} from "../../store/BooksStore";

type PropType = {
    title: string;
}
function MainHeader(props: PropType) {
    const categories: HasIdName[] = [
        {
            id: v4(),
            name: "all"
        },
        {
            id: v4(),
            name: "art"
        },
        {
            id: v4(),
            name: "biography"
        },
        {
            id: v4(),
            name: "computers"
        },
        {
            id: v4(),
            name: "history"
        },
        {
            id: v4(),
            name: "medical"
        },
        {
            id: v4(),
            name: "poetry"
        },
    ]
    const sortOptions: HasIdName[] = [
        {
            id: v4(),
            name: "relevance",
        },
        {
            id: v4(),
            name: "newest",
        },
    ]

    const search = (value: string, dataType: "value" | "orderBy" | "subject") => {
        booksStore.setSearch(value, dataType);
        booksStore.getBooks();
    }

    return (
        <header className="header">
            <h1 className="header__title">{props.title}</h1>
            <BookSearcher />
            <div className="header__filters">
                <UISelect
                    title="Categories"
                    options={categories}
                    onSelect={(value) => search(value, "subject")}
                />
                <UISelect
                    title="Sorting by"
                    options={sortOptions}
                    onSelect={(value) => search(value, "orderBy")}
                />
            </div>
        </header>
    )
}

export default MainHeader