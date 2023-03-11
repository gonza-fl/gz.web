import ProfileCard from '../ProfileCard/ProfileCard';

const Hero = () => {
  return (
    <section
      className='h-[90vh] bg-cover bg-center'
      style={{ backgroundImage: 'url(https://i.postimg.cc/SK0CQ8xG/bg3.jpg)' }}
    >
      <header className='text-white  flex justify-center pt-10'>
        <ProfileCard />
      </header>
    </section>
  );
};

export default Hero;
