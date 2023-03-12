import Logo from './Logo';
import Nav from './Nav';
import { useState } from 'react';
import MenuButton from './MenuButton';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className='sticky top-0'>
      <div className='flex justify-around p-10'>
        <Logo />
        <Nav menuVisible={menuVisible} />
        <MenuButton menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      </div>
    </header>
  );
};

export default Header;
