import React, {useState, useEffect} from 'react';

const Drop = () => {
    const [itemi, setItemi] = useState('++')

    const handleChange = (e) => {
        setItemi(e.target.value)
    }

    const handleSubmit = (e) => {
        // setItemi(e.target.value)
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <form onSubmit={handleSubmit}>
        <select value={itemi} onChange={handleChange} style={{height: '1.5rem'}}>
            <option value='Banana'>Banana</option>
            <option value='Kruška'>Kruška</option>
            <option value='Jabuka'>Jabuka</option>
            <option value='Breskva'>Breskva</option>
            <option value='Jagoda'>Jagoda</option>
        </select>
        </form>
        <h1 style={{height: '1rem', marginLeft: '3rem'}}>{itemi}</h1>
        </div>
    )
}

export default Drop;