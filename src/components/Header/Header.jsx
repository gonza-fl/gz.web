import Logo from './Logo';
import Nav from './Nav';
import { useState } from 'react';
import MenuButton from './MenuButton';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className='sticky top-0 bg-slate-900'>
      <div className='flex justify-between py-5 px-7'>
        <Logo />
        <Nav menuVisible={menuVisible} />
        <MenuButton menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      </div>
    </header>
  );
};

export default Header;
