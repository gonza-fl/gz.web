import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

const Logo = () => {
  return (
    <div className='z-20'>
      <a
        href='#'
        className='text-xl md:text-2xl text-white font-bold relative rounded-full left-5'
        style={{
          textDecoration: 'none',
        }}
      >
        Gonza
        <span className='absolute -left-5 top-1 -z-10'>
          <RiCheckboxBlankCircleFill className='text-2xl text-violet-500 absolute left-2 bottom-1' />
          <RiCheckboxBlankCircleFill className='text-3xl text-primary' />
        </span>
        <span className='text-primary text-3xl' style={{ 'line-height': 0 }}>
          .
        </span>
        fl
      </a>
    </div>
  );
};

export default Logo;
