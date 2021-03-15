import React, {useState, useEffect} from 'react';

const Color = () => {
    const [color, setColor] = useState('white')

    const changeColor = (e) =>{
        if (color === 'white')
        setColor('blue');
        else if (color === 'blue')
        setColor('red');
        else {
            setColor('white');
        }
    } 

    return(
        <button onClick={changeColor} style={{background: `${color}`}}>Change color</button>
    )
}

export default Color;