import "./UICard.scss"

function UICard() {
    return (
        <div className="ui-card">
            <div className="ui-card__image">
            <img src="" alt=""/>
            </div>
            <span className="ui-card__category">Category</span>
            <div className="ui-card__description">DescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescription
                Description
            </div>
            <span className="ui-card__author">Author</span>
        </div>
    )
}

export default UICard