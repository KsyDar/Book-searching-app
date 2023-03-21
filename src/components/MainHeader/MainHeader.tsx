import "./MainHeader.scss"
import UISearcher from "../ui/UISearcher/UISearcher";
import UISelect from "../ui/UISelect/UISelect";
import {HasIdName} from "../../types/data";
import { v4 } from "uuid"

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

    return (
        <header className="header">
            <h1 className="header__title">{props.title}</h1>
            <UISearcher/>
            <div className="header__filters">
                <UISelect title="Categories" options={categories} />
                <UISelect title="Sorting by" options={sortOptions} />
            </div>
        </header>
    )
}

export default MainHeader