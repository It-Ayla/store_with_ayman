import React, { Component } from 'react';
import ItemCard from './itemCard';

export default function CardGrid() {
    return (
        <div className='card--grid'>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
} 