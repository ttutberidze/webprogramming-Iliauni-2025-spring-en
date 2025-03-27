const user = (props) => {
    console.log(props)
    return (
        <div>{props.title} - {props.children}</div>
    )
}

export const user2 = () => {
    return (
        <div>Hi, I'm user 2</div>
    )
}

export default user