import React, {useState, useEffect} from 'react';

const Color = () => {
    const [color, setColor] = useState('white')
    const [dim, setDim] = useState(1)
    const [textColor, setTextColor] = useState('blue')

    const dimButton = (e) => {
        setDim(0.7);
    }

    const undimButton = (e) => {
        setDim(1);
    }

    const changeColor = (e) =>{
        if (color === 'white'){
            setColor('blue');
            setTextColor('red');
        }
        else if (color === 'blue'){
            setColor('red');
            setTextColor('white');    
        }
        else {
            setColor('white');
            setTextColor('blue');   
        }
    } 

    return(
        <button onClick={changeColor} onMouseEnter={dimButton} onMouseLeave={undimButton} style={{
            background: `${color}`, borderColor: 'white', borderWidth: '5px', transition: '0.5s', cursor: 'pointer', opacity: `${dim}`, borderRadius: '12px', fontSize: '3rem',
            color: `${textColor}`, textTransform: 'uppercase', fontWeight: 'bold'
        }}>Change color</button>
    )
}

export default Color;