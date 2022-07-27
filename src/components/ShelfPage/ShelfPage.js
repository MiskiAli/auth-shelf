import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
    const items = useSelector((store) => store.item);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEM' });
    }, []);

    return (
        <div className="container">
            <h2>Shelf</h2>
            <p>All of the available items can be seen here.</p>
        </div>
    );
}

export default ShelfPage;
