import React from 'react';
import PhotoProfile from './PhotoProfile';

const ProfileCard = () => {
  return (
    <div className='h-[80vh] md:h-[78vh] w-[100%] flex flex-col md:flex-row-reverse justify-around items-center'>
      <div className='md:p-5 md:bg-gray-800/20 rounded-xl'>
        <div className='text-md md:text-xl text-center mb-2'>
          Hi! my name is{' '}
          <b className='bg-primary py-1.5 px-2 rounded-sm'>Gonzalo Flamenci</b>
        </div>
        <p className='text-xl mt-6 md:text-3xl text-center flex flex-col'>
          And I'm a
          <h1 className='font-bold text-violet-400 text-3xl mt-4'>
            FullStack Developer 🤠💻
          </h1>
        </p>
      </div>
      <PhotoProfile />
    </div>
  );
};

export default ProfileCard;
