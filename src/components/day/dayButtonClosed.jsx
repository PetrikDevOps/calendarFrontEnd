const DayButtonClosed = (props) => {
    return (
        <div onClick={props.handleClick}>
            {props.day}
        </div>
    )
}

export default DayButtonClosed