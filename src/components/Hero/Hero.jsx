import ProfileCard from '../ProfileCard/ProfileCard';

const Hero = () => {
  return (
    <section className='relative -z-10 lg:static'>
      <div className='h-[100vh] md:h-auto text-white md:w-[100vw] flex justify-center pt-5 bg-slate-900 rounded-bl-full rounded-tl-full md:rounded-t-none md:rounded-bl-full lg:rounded-bl-none lg:rounded-br-[100%]'>
        <ProfileCard />
      </div>
    </section>
  );
};

export default Hero;
