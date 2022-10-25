import Logo from './Logo';
import Nav from './Nav';
import { useState } from 'react';
import MenuButton from './MenuButton';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className='flex items-center justify-between p-6 h-[10vh]'>
      <Logo />
      <Nav menuVisible={menuVisible} />
      <MenuButton menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </header>
  );
};

export default Header;
