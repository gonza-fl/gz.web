import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const MenuButton = ({ menuVisible, setMenuVisible }) => {
  return (
    <button
      className='xl:hidden text-3xl text-white relative z-50'
      onClick={() => setMenuVisible(!menuVisible)}
    >
      {menuVisible ? <RiCloseLine /> : <RiMenu3Fill />}
    </button>
  );
};

export default MenuButton;
