import React, {useState} from 'react'

const ListForm = (props) => {
    const [listItem, setListItem] = useState('');
    const [list, setList] = useState([]);
    const [user, setUser] = useState([]);

    const handleChange = (e) =>{
        setListItem(e.target.value);
        console.log(listItem)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let addList = listItem;
        setList([...list, addList])
        setListItem('');
        const mapList = list.map(item =>{
            return <li>{item}</li>
        })
        setUser(mapList)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add to the list' value={listItem}
                name='text' onChange={handleChange}
            ></input>
            <button>Add</button>
            <pre style={{display:'flex', flexDirection:'column', width: '7rem'}}>{user}</pre>
            </form>
        </div>
    )
}

export default ListForm;