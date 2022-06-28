import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    console.log(images,loading);

    return (
        <div>
            <h3>{category}</h3>
            {loading && 'Cargando...' }
            <div className="card-grid">
                {
                    images.map(img => {
                        return (
                            <GifGridItem
                                key={img.id} 
                                {...img}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
