import React from 'react';
import Description from './Description';
import MainCarousel from './MainCarousel';
import manWithTick from '../../../src/img/bg-2.png'
import Tariffs from './Tariffs';


const Main = () => {
  return (
    <main className='main'>
      <div className='main__wrapper_common'>
        <Description />
        <MainCarousel />
        <img className='manWithTick' src={manWithTick} alt='manWithTick' />
        <Tariffs />
      </div> 
    </main>
  )
}

export default Main
