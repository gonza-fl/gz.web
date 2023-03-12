import React from 'react';
import PhotoProfile from './PhotoProfile';

const ProfileCard = () => {
  return (
    <div className='backdrop-blur-sm h-[80vh] md:h-[78vh] w-[100%] flex flex-col lg:flex-row-reverse justify-around items-center bg-gray-900/80'>
      <div>
        <h1 className='text-md md:text-xl text-center mb-2'>
          Hi! my name is{' '}
          <b className='bg-primary py-1.5 px-2 rounded-sm'>Gonzalo Flamenci</b>
        </h1>
        <p className='text-md mt-6 md:text-6xl text-center flex flex-col'>
          And I'm a
          <b className='font-bold text-violet-400 text-3xl mt-4'>
            Full Stack developer 🤠💻
          </b>
        </p>
      </div>
      <PhotoProfile />
    </div>
  );
};

export default ProfileCard;
