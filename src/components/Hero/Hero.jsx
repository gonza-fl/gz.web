import Bg from '../../assets/bg3.jpg';
import ProfileCard from '../ProfileCard/ProfileCard';

const Hero = () => {
  return (
    <section className='h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${Bg})` }}>
      <header className='text-white  flex justify-center pt-10'>
        <ProfileCard/>
      </header>
    </section>
  );
};

export default Hero;
