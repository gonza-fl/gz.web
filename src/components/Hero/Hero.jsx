import ProfileCard from '../ProfileCard/ProfileCard';

const Hero = () => {
  return (
    <section className='h-[80vh] absolute -z-10 lg:static'>
      <div className='text-white  flex justify-center pt-10 bg-slate-900 rounded-bl-full rounded-tl-full md:rounded-t-none md:rounded-bl-full lg:rounded-bl-none lg:rounded-br-[100%]'>
        <ProfileCard />
      </div>
    </section>
  );
};

export default Hero;
