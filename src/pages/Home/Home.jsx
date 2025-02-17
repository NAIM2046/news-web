import React from 'react';
import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navbar/Navber';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNew from './BreakingNew';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';


const Home = () => {
    const news = useLoaderData() ;
    console.log(news) ;

    return (
        <div>
           
           <Header></Header>
           <BreakingNew></BreakingNew>
           <Navber></Navber>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                  <LeftSideNav></LeftSideNav>
                </div>
               {/* news container */}
                <div className=' md:col-span-2 border'>
                    {
                        news.map(aNews => <NewsCard 
                            key={aNews._id}
                            news={aNews}
                            ></NewsCard>)
                    }
                </div>

                <div className='border'>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;