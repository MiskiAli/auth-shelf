import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function ShelfForm() {
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    

    

    const handleSubmit = (event) => {
        console.log('here is the new item', description, url);
        event.preventDefault();
        dispatch({
            type: 'POST_ITEM',
            payload: { description, url },
        });
        setDescription('')
        setUrl('')
    }

    

    return (
        <div>
            <div>ShelfForm</div>
            <form onSubmit={handleSubmit}>
                <input
                    
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <input 
                    
                    type="text"
                    placeholder="url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Add Item</button>
            </form>
        </div>
    );
}
