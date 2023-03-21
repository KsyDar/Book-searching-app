import "./UISelect.scss"
import {HasIdName} from "../../../types/data";
import {useRef, useState} from "react";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrowIcon.svg";
import {useOnClickOutside} from "usehooks-ts";

type PropType = {
    title: string;
    options: HasIdName[];
}
function UISelect(props: PropType) {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const target = useRef(null);

    useOnClickOutside(target, () => setIsOpen(false));

    return (
        <div ref={target} className="ui-select">
            <span className="ui-select__title">{props.title}</span>
            <div>
                <div className="ui-select__field">
                    <input
                        type="text"
                        disabled
                        className="ui-select__input"
                        value={props.options[0].name}
                    />
                    <button className="ui-select__button" onClick={() => setIsOpen(!isOpen)}>
                        <ArrowIcon style={{transform: isOpen ? "rotate(180deg)" : "none" }}/>
                    </button>
                </div>

                {
                    isOpen &&
                    <div className="ui-select__options">
                        <ul>
                            {
                                props.options.map(option => (
                                    <li key={option.id} className="ui-select__options-item" >
                                        {option.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default UISelect