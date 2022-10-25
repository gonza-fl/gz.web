import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const MenuButton = ({ menuVisible, setMenuVisible }) => {
  return (
    <button
      className='absolute top-7.5 right-6 z-50 xl:hidden text-2xl'
      onClick={() => setMenuVisible(!menuVisible)}
    >
      {menuVisible ? <RiCloseLine /> : <RiMenu3Fill />}
    </button>
  );
};

export default MenuButton;
