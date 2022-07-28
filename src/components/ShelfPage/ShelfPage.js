import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';

function ShelfPage() {
    const items = useSelector((store) => store.item);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEM' });
    }, []);

    const handleDelete = (event) => {
        // console.log(
        //     `You clicked the delete button on this item: ${item}`
        // );
        event.preventDefault();
        dispatch({
            type: 'DELETE_ITEM',
            // payload: { description, image_url, user_id },
            payload: id
        });
    };

    const handleSubmit = (event) => {
        console.log('here is the new item', description, image_url);
        event.preventDefault();
        dispatch({
            type: 'POST_ITEM',
            payload: { description, image_url},
        });
        setDescription('');
        setImage_Url('');
    };
    return (
        <div className="container">
            <h2>Shelf</h2>
            <ShelfForm />
            <p>All of the available items can be seen here.</p>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={i}>
                            <img src={item.image_url} />
                            {item.description}{' '}
                            <button onClick={handleDelete}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ShelfPage;
