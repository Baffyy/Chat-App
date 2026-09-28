import React, { useState } from "react";

function Join() {
    const [inputText, setText] = useState({
        username: "",
        roomname: ""
    })

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setText(prevItems => {
            return { ...prevItems, [name]: value }
        })
    }

    return (
        <form>
            <div className="form-input">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={inputText.username}
                    onChange={handleChange}
                />
            </div>

            <div className="form-input">
                <label htmlFor="roomname">Room Name</label>
                <input
                    type="text"
                    name="roomname"
                    id="roomname"
                    value={inputText.roomname}
                    onChange={handleChange}
                />
            </div>

            <button onClick={handleClick}>Join Now!</button>
        </form>
    )
}

export default Join;