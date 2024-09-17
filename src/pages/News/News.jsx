import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navbar/Navber';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const News = () => {
    const {id} = useParams() ;
    console.log(id) ;
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                       <h2 className='text-5xl'>News Detail </h2>
                       <p>{id}</p>
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;