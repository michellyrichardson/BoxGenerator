import React, {useState} from 'react';

const BoxForm = ({boxes, setBoxes}) => {

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    const colorHandler = (e) => {
        setColor(e.target.value);
    }

    const heightHandler = (e) => {
        setHeight(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        setBoxes([...boxes,{
            "color": color, 
            "height": height,
            "style": {
                "display": "inline-block",
                "padding": "20px",
                "margin": "25px",
                "background": color,
                "height": `${height}`,
            }
        }]);

        setColor("");
        setHeight("");
    } 

    return (
        <div class="data">
            <form onSubmit={formHandler}>
                <p>Color: </p>
                <input type="text" value={color} onChange={(e) => 
                    {setColor(e.target.value)}}></input>
                <p>Height: </p>
                <input type="text" value={height} 
                    onChange={heightHandler}></input>
                <br />
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default BoxForm;