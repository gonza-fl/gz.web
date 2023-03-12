import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
function App() {
  const [IsLoad, setIsLoad] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoad(!IsLoad);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return !IsLoad ? (
    <>
      <Header />
      <Hero />
    </>
  ) : (
    <div className='h-100 w-100 flex justify-center align-center'>
      <progress
        className='nes-progress is-pattern w-50'
        value='90'
        max='100'
      ></progress>
    </div>
  );
}

export default App;
