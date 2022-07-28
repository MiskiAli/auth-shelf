import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';
import ShelfDelete from '../ShelfDelete/ShelfDelete';

function ShelfPage() {
    const items = useSelector((store) => store.item);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEM' });
    }, []);


    
    return (
        <div className="container">
            <h2>Shelf</h2>
            <ShelfForm />
            <p>All of the available items can be seen here.</p>
            <ul>
                {items.map((item) => {
                    return (
                        <ShelfDelete key={item.id} item={item}/>

                    );
                })}
            </ul>
        </div>
    );
}

export default ShelfPage;
