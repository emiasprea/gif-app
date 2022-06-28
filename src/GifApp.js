import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifAppComponent = () => {

    const [categories,setCategories] = useState(['Rock']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Funk']);
    // }

    return ( 
        <>
            <h2>Gif App</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr/>

            <ul>
                {
                    categories.map( (category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>
        </>
    )
}