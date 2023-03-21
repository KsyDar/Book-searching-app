import "./BookList.scss"
import UICard from "../../components/ui/UICard/UICard";
function BookList() {
    return (
        <main className="book-list">
            <h1 className="book-list__title">Found 111 results</h1>
            <div className="book-list__content">
            <UICard />
            <UICard />
            <UICard />
            <UICard />
            <UICard />
            </div>
        </main>
    )
}

export default BookList