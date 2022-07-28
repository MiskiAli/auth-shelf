import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ShelfForm() {
    const [description, setDescription] = useState('');
    const [image_url, setImage_Url] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        console.log('here is the new item', description, image_url, user_id);
        event.preventDefault();
        dispatch({
            type: 'POST_ITEM',
            payload: { description, image_url, user_id },
        });
        setDescription('');
        setImage_Url('');
    };

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
                    value={image_url}
                    onChange={(event) => setImage_Url(event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    Add Item
                </button>
            </form>
        </div>
    );
}
