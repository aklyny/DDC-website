import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Photography'
              path='/photography'
            />
            <CardItem
              src={img1}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/videoProduction'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/photography'
            />
            <CardItem
              src={img1}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/videoProduction'
            />
            <CardItem
              src={img2}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/audioProduction'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
