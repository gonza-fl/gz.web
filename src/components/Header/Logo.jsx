import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

const Logo = () => {
  return (
    <div className='xl:w-1/6 flex justify-end -mt-1 z-50'>
      <div>
        <a
          href='#'
          className='text-2xl font-bold p-1 relative bg-white rounded-full'
        >
          Gonza
          <span className='absolute -left-3 top-2.5 -z-10'>
            <RiCheckboxBlankCircleFill className='text-3xl text-violet-400 absolute left-1 bottom-1' />
            <RiCheckboxBlankCircleFill className='text-3xl text-primary' />
          </span>
          <span className='text-primary text-5xl' style={{'line-height': 0}}>.</span>
          fl
        </a>
      </div>
    </div>
  );
};

export default Logo;
