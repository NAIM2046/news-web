import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
           <div className='p-4'>
           <h3 className="text-2xl text-center mb-1">Login With </h3>
         <button className="btn btn-outline mb-3 w-full">
           <FaGoogle />
                Google
         </button>
         <button className="btn btn-outline w-full">
           <FaGithub />
                GitHub
         </button>
           </div>

           <div className='p-4'>
           <h3 className="text-2xl text-center mb-1">Find Us On </h3>
            <a className='flex border-2 border-gray-600 p-2 rounded-t-lg justify-center' href=""> <FaFacebook className='text-xl mr-3'></FaFacebook> FaceBook</a>

            <a className='flex border-2 border-x-gray-600 p-2  justify-center' href=""> <FaTwitter className='text-xl mr-3'></FaTwitter> Twitter</a>

            <a className='flex border-2 border-gray-600 p-2 rounded-b-lg justify-center' href=""> <FaInstagram className='text-xl mr-3'></FaInstagram> Instagram </a>
           </div>
            
           <div className='p-4'>
           <h3 className="text-2xl text-center mb-1"> Q Zone </h3>
            <img className='mx-auto' src= {qZone1} alt="" />
            <img className='mx-auto' src= {qZone2} alt="" />
            <img className='mx-auto' src= {qZone3} alt="" />
           </div>

        </div>
    );
};

export default RightSideNav;