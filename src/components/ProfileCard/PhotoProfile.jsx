import React from 'react';
import ProfilePhoto from '../../assets/gdt.png';

const PhotoProfile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ProfilePhoto})` }}
      className='w-[80%] h-[50%] md:w-96 bg-cover bg-center'
    ></div>
  );
};

export default PhotoProfile;
