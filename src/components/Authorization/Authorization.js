import React from 'react'
import peopleWithKey from '../../../src/img/auch.png';
import padlock from '../../img/zamok.svg';
import Form from './Form';
import { useSelector } from 'react-redux';

const Authorization = () => {
  const newWidth = useSelector(state => state.app.width)
  
  const isShown = newWidth < 1270 ? true : false;
  return (
    <main className='main'>
      <div className='main__wrapper-auth'>
        <div className='main__leftBox'>
          <h1 className='main__title'>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
          <img className='main__image' src={peopleWithKey} alt='peopleWithKey' hidden={isShown}/>
        </div>
        <div className='main__rightBox'>
          <img className='main__padlockImg' src={padlock} alt='padlock' />
          <Form />
        </div>
        <img className='main__image' src={peopleWithKey} alt='peopleWithKey' hidden={!isShown}/>
      </div>
    </main>
  )
}

export default Authorization
