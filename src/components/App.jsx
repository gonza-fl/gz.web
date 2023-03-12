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

  return true ? (
    <div
      className='bg-slate-900 bg-center bg-cover'
      style={{
        backgroundImage: 'url(https://i.postimg.cc/prPx16X7/newbg.jpg)',
      }}
    >
      <Header />
      <Hero />
    </div>
  ) : (
    <progress
      className='nes-progress is-pattern w-50'
      value='90'
      max='100'
    ></progress>
  );
}

export default App;
