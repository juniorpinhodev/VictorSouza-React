import React from 'react';
import { MdMenu } from 'react-icons/md';
import { SlEarphones } from 'react-icons/sl';

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '#'
  },
  {
    id: 2,
    title: 'Sobre',
    url: '#'
  },
  {
    id: 3,
    title: 'Serviços',
    url: '#'
  },
  {
    id: 4,
    title: 'Contatos',
    url: '#'
  }
]

const Navbar = () => {
  return (
    <>
    <div className='bg-brandDark text-white py-8 font-varela'>
    <nav className='container flex justify-between items-center'>

    {/* Logo section */}
    <div>
      <a href='#' className='text-xl font-bold uppercase'>Victor |{" "}<span className='font-extralight text-white/70'>Souza</span></a>
    </div>

    {/* Menu section */}
    <div className='hidden md:block'>
      <ul className='flex items-center gap-4'>
        {
          NavbarMenu.map((item) => (
            <li key={item.id}>
              <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
            </li>
        ))}
      </ul>
    </div>

    {/* Mobile Hamburger section */}
    <div className='md:hidden'>
      <MdMenu className='text-4xl'/>
    </div>
  </nav>
  </div>
  </>
  );
};

export default Navbar;