import "./UILoader.scss";

type PropType = {
    width: string;
    height: string;
}
function UILoader(props: PropType) {
    const style = {
        width: props.width,
        height: props.height,
    }

    return (
        <span className="ui-loader" style={style}></span>
    )
}

export default UILoader