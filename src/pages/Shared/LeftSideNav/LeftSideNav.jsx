import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const LeftSideNav = () => {
    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch("categories.json") 
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='space-y-6'>
            <h3> All Categories :{categories.length} </h3>

            {
                categories.map(categori => <Link to = {`/categori/${categori.id}`}
                    className='block ml-4 text-xl font-semibold'
                    key={categori.id}> {categori.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;