import React from "react";
import { useDispatch } from "react-redux";


function ShelfDelete({item}) {

    const dispatch = useDispatch();


    const handleDelete = (id) => {

        console.log(
            'You clicked the delete button on this item', id);
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        });
    }


    return (
        <>

            <li key={item.id}>
                <img src={item.image_url} />
                {item.description}{' '}
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
        </>
    )
}

export default ShelfDelete;