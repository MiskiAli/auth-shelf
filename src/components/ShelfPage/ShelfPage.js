import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';

function ShelfPage() {
    const items = useSelector((store) => store.item);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEM' });
    }, []);

    const handleDelete = (id) => {
        event.preventDefault();
        console.log(
                'You clicked the delete button on this item', id);
            // dispatch({
            //     type: 'DELETE_ITEM',
            //     // payload: { description, image_url, user_id },
            //     payload: id  });
                }

    
    return (
        <div className="container">
            <h2>Shelf</h2>
            <ShelfForm />
            <p>All of the available items can be seen here.</p>
            <ul>
                {items.map((item, id) => {
                    return (
                        <li key={id}>
                            <img src={item.image_url} />
                            {item.description}{' '}
                            <button onClick={handleDelete(item.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ShelfPage;
