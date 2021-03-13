import React, {useState, useEffect} from 'react';

const Efekt = () => {
    
    const [items, setItems] = useState ([]);
    const [show, setShow] = useState(false);
    const [user, setUser] = useState([]);

    
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setItems(json))

    }, [])
    
    const getUser = (items) => {
        const tempItems = items.map(item => {
            return JSON.stringify(item)
        })
        const arrey = tempItems.map(item => ({
                'name': item.name
            }))
        setUser(arrey)
        // arrey.map(name => {
        //    return setUser(name)
        // })
        // const getName = items.map(item => ({
        //             user: item.name
        //     }))
        // // setUser(username)
        console.log(user)
        setShow(true);
    }

    return (
        <div>
            { show === false ?
                <button onClick={(e) => getUser(e)} style={{width: '7rem'}}>Show users</button>
                :
                <button onClick={() => setShow(false)} style={{width: '7rem'}}>Hide users</button>
            }
            { show === true ?
            <pre style={{display:'flex', flexDirection:'column'}}>{user}</pre>
            :
            <pre></pre>
            
            }
        </div>  
    )

}

export default Efekt;