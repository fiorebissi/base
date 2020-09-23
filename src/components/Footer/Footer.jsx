import React from 'react';
import { Foot, Redes } from './styles';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const SIZE= '32px';
  return (
    <Foot>
      <div className='flex flex-row items-center justify-around text-yellow-500'>
        <div className='flex flex-col'>
          <p>Home</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
        <div className='flex flex-col'>
          <p>info@template.com</p>
          <p>XXXX XXXX XXXXX</p>
          <p>Telf: 123456787</p>
        </div>
        <Redes>
        <FaFacebook size={SIZE}  />
        <FaInstagram size={SIZE}  />
      </Redes>
      </div>
      
      <p className='p-5 text-sm text-center text-yellow-700'>
        Hecho con 
        <span role='img' aria-label='heart'> 💗 </span>
        por Fiorella Bissi
        </p>
    </Foot>
  )
}

export default Footer
