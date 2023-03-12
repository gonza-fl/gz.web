import ProfileCard from '../ProfileCard/ProfileCard';

const Hero = () => {
  return (
    <section className='h-[90vh] bg-cover bg-center bg-black/10'>
      <div className='text-white  flex justify-center pt-10 bg-black/10'>
        <ProfileCard />
      </div>
    </section>
  );
};

export default Hero;
