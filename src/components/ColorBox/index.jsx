import React, {useState} from 'react';
import './ColorBox.scss'

ColorBox.propTypes = {

};

const getRandomColor = () => {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'red', 'blue'];
    const {length} = COLOR_LIST;
    const randomColor = Math.floor(Math.random() * (length));
    return COLOR_LIST[randomColor];
};

function ColorBox() {

    const [color, setColor] = useState(() => {
        return localStorage.getItem('box_color') || 'deeppink';
    });

    const handleColor = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    };
    return (
        <div className={"color-box"}
             style={{backgroundColor: color}}
             onClick={() => handleColor()}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;