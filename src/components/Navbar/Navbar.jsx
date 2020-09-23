import React, { useState } from 'react';
// import Logo from '../../static/logo.png';
import { Container, Header, Menu, Link, Div } from './styles';
import { CgMenu } from 'react-icons/cg';


const Navbar = () => {
  const SIZE = '24px';
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
    } else {

      menu.classList.add('is-active');
    }
  };
  return (
    <>
    <Div>
      <CgMenu onClick={handleClick} className='burger-button' size={SIZE} />
    </Div>
    <Header>
      <Container>
        <figure className='logo'>
          {/* <img src={Logo} height='50' alt='Logo' /> */}
          LOGO
        </figure>
        <Menu className='menu'>
          <ol>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/1'>1</Link>
            </li>
            <li>
            <Link to='/2'>2</Link>
            </li>
            <li>
            <Link to='/3'>3</Link>
            </li>
            <li>
            <Link to='/4'>4</Link>
            </li>
          </ol>
        </Menu>
      </Container>
    </Header>
    </>

  )
    
}

export default Navbar;

{/* <Nav className="shadow">
  <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
    <div className="flex items-center justify-between md:justify-items-center">
      <div>
        <img src={Logo} alt='' />
      </div>

      //  {/* Mobile menu button */}
    //   <div className="flex md:hidden">
    //     <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
    //       <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    //         <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </div>

     {/* Mobile Menu open: "block", Menu closed: "hidden" */}
  //   <div className="items-center md:flex">
  //     <Menu className="flex flex-col md:flex-row md:mx-6">
  //       <Link to='/'>Home</Link>
  //       <Link to='/quienesSomos'>Quienes Somos</Link>
  //       <Link to='/ubication'>Ubicación</Link>
  //       <Link to='/activity'>Actividades</Link>
  //       <Link to='/excursiones'>Excursiones</Link>
  //     </Menu>

  //   </div>
  // </div>
//</Nav> 
  
