import React, {useState} from "react";

const Box = ({box, idx, deleteHandler, colorChangeHandler}) => {

    let [color, setColor] = useState("");

    let submitHandler = (e) => {
        e.preventDefault();
        colorChangeHandler(color, idx);
    }

    return (
        <div>
            <div style={box.style}>
                <p>This box is suppose to be {box.color}</p>
                <button onClick={(e) => 
                    {deleteHandler(idx)}}>Delete</button>
                <form onSubmit={submitHandler}>
                    <input type="text" value={color} onChange={(e) => 
                        setColor(e.target.value)}></input>
                    <input type="submit" value="Change color!"></input>
                </form>
            </div>
        </div>
    )
}
export default Box;