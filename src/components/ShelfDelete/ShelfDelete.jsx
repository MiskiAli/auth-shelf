import React from "react";
import { useDispatch, useSelector } from "react-redux";




function ShelfDelete({item}) {

    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const user_id = user.id;


    const handleDelete = (id) => {

        console.log(
            'You clicked the delete button on this item', id);
        if (user_id === item.user_id){
            dispatch({
                type: 'DELETE_ITEM',
                payload: id
            });
        }else{
            alert('ERRRRROR NO WAY BRO ::: DENIED ::: YOU HAVE NOT ACCESS :::');
        }
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