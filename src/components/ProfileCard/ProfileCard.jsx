import React from 'react';
import PhotoProfile from './PhotoProfile';

const ProfileCard = () => {
  return (
    <div className='md:h-[78vh] w-[100%] flex flex-col md:flex-row-reverse justify-around items-center'>
      <div className='nes-balloon from-left is-dark w-8/12 md:w-[80%] lg:w-[50%] py-5 px-3 md:p-5'>
        <div className='text-md md:text-xl text-center mb-2'>
          Hi! my name is{' '}
          <b className='bg-primary py-1.5 px-3 rounded-sm md:inline-block mt-5 lg:mt-0'>
            Gonzalo Flamenci
          </b>
        </div>
        <p className='text-xl mt-6 md:text-3xl text-center flex flex-col'>
          And I'm a
          <span className='font-bold text-violet-400 mt-4'>
            FullStack Developer 🤠💻
          </span>
        </p>
      </div>
      <PhotoProfile />
    </div>
  );
};

export default ProfileCard;
