import React, {useState} from 'react';
import BoxDisplay from './BoxDisplay';
import BoxForm from './BoxForm';

const Boxes = (props) => {

    const [boxes, setBoxes] = useState([
        {
            "color": "red", 
            "height": "150",
            "style": 
            {
                "display": "inline-block",
                "padding": "20px",
                "margin": "20px",
                "background": "red",
            }
        }
    ]);

    const deleteHandler = (idx) => {
        setBoxes(boxes.filter((box, i) => i !== idx));
    }

    const colorChangeHandler = (color, idx) => {
        let newBoxes = [...boxes];

        const selectedBox = Object.assign({}, newBoxes[idx]);
        const selectedStyle = Object.assign({}, newBoxes[idx].style)
        selectedStyle.background = color;
        selectedBox.color = color;
        selectedBox.style = selectedStyle;
        newBoxes[idx] = selectedBox;
        setBoxes(newBoxes);
    }

    return (
        <div>
            <BoxForm 
                boxes={boxes} 
                setBoxes={setBoxes}
            />
            <BoxDisplay 
                boxes={boxes}
                deleteHandler={deleteHandler}
                colorChangeHandler={colorChangeHandler} 
            />
        </div>
    )
}

export default Boxes;