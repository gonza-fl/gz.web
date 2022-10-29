const Nav = ({ menuVisible }) => {
  return (
    <nav
      className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
        !menuVisible ? '-left-full' : 'left-0'
      } top-0 xl:static flex-1 flex flex-col justify-center xl:justify-start xl:ml-[23%] items-center transition-all duration-1000`}
    >
      <ul className='mb-20 lg:mb-0 flex justify-center w-[80%]'>
        <li className='mr-5'>
          <a href='https://github.com/gonza-fl' target='_blank'>
            <i class='nes-icon github is-medium'></i>
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/gonza-flamenci' target='_blank'>
            <i class='nes-icon linkedin is-medium'></i>
          </a>
        </li>
      </ul>
      <ul className='flex flex-col xl:flex-row gap-10 font-medium text-center w-[30%] justify-around'>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
