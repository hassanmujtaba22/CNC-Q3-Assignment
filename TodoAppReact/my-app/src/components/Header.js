import React from "react"

const Header = (props) => {
    return(
        <div className="heading">
            <h1>TODO APP</h1>
            <p>You've {props.numTodos} Todos</p>
        </div>
    )
}
export default Header