import React from 'react';
import Box from './Box';

const BoxDisplay = ({boxes, deleteHandler, colorChangeHandler}) => {

    return (
        <div className="container">
        { boxes.map((val, i) =>
            <section key={i}>
                <Box
                    box={val}
                    idx={i}
                    deleteHandler={deleteHandler}
                    colorChangeHandler={colorChangeHandler}
                />
            </section>
        )}
        </div>
    )
}
export default BoxDisplay;