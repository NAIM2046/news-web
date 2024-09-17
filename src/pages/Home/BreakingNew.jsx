import React from 'react';
import Marquee from "react-fast-marquee";
const BreakingNew = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>Breaking New :</button>
            <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
    );
};

export default BreakingNew;