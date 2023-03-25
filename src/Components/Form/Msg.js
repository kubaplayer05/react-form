import "./Msg.css"

function Msg(props) {

    const classes = "msg " + props.className

    return (
        <p className={classes}>
            {props.value}
        </p>
    )
}

export default Msg