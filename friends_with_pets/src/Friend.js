import React from "react"

const Friend = (props) => {
    return (
        <div>
            <p>-----------------------</p>
            <h1> {props.friend.name}
                <p> {props.friend.age}</p>
            </h1>
        </div>
    )
}
export default Friend