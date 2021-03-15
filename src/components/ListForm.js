import React, {useEffect, useState} from 'react'

const ListForm = (props) => {
    const [listItem, setListItem] = useState({
        name: '',
        id: 0,
    });
    const [list, setList] = useState([{
        name: '',
        id: 0,
    }]);
    const [idCount, setIdCount] = useState(1);

    const handleChange = (e) =>{
        setListItem({name: e.target.value, id: idCount});
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // let addList = listItem;
        // let idCount = listItem.id + 1;
        // idCount= + 1;
        
        // let currentCount = idCount+1;
        if(listItem.name !== '') {
            setIdCount(idCount+1)
            // setListItem({
            //     id: currentCount,
            // });
            setList([...list, listItem])  
        }
        setListItem({
            name: '',
        });
        console.log(idCount);
        console.log(listItem);
        console.log('1', list)

    }

    const deleteItem = () => {
       const listDelete = list.filter(item => item.id !== list.id)

       setList(listDelete)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add to the list' value={listItem.name}
                name='text' onChange={handleChange}
            ></input>
            <button>Add</button>
            {/* <pre style={{display:'flex', flexDirection:'column', width: '7rem'}}> {list.slice(0).reverse().map((item) => (
            <ul><li>{item.name}</li><button onClick={deleteItem}>Delete</button></ul>
            ))} */}
            <pre style={{display:'flex', flexDirection:'column', width: '7rem'}}> {
                list.slice(0).reverse().map((item) => (
                <ul><li>{item.name}</li><button onClick={deleteItem}
                >Delete</button></ul>
            ))}
            </pre>
            </form>
        </div>
    )
}

export default ListForm;