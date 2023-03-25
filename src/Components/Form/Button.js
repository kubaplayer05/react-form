import "./Button.css"

function Button(props) {

    const classes = "btn " + props.className

    return (
        <button className={classes} type={props.type}>
            {props.name}
        </button>
    )
}

export default Button