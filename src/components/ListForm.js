import React, {useEffect, useState} from 'react'

const ListForm = (props) => {
    const [listItem, setListItem] = useState('');
    const [list, setList] = useState([]);
    const [user, setUser] = useState([]);

    const handleChange = (e) =>{
        setListItem(e.target.value);
        console.log(listItem)
    }
    // useEffect(() => {setListItem()})

    const handleSubmit = (e) =>{
        e.preventDefault();
        // let addList = listItem;
        if(listItem !== '') {
            setList([...list, listItem])
        }
        setListItem('');
        // const mapList = list.map(item =>{
        //     return <li>{item}</li>
        // })
        // setUser(mapList)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add to the list' value={listItem}
                name='text' onChange={handleChange}
            ></input>
            <button>Add</button>
            <pre style={{display:'flex', flexDirection:'column', width: '7rem'}}> {list.map((item) => (
            <ul><li>{item}</li></ul>
            ))}
            </pre>
            </form>
        </div>
    )
}

export default ListForm;