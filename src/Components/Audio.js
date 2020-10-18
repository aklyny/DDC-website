import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';


const Audio = ()=>{
    return(
        <>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="swipe__img">
        <img src={img1} alt="pht" />
        <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
      <img src={img2} alt="pht" />
      <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
      <img src={img3} alt="pht" />
      <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
      <img src={img1} alt="pht" />
      <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
      <img src={img2} alt="pht" />
      <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
      <img src={img3} alt="pht" />
      <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
            <img src={img1} alt="pht" />
            <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
            <img src={img2} alt="pht" />
            <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
            <img src={img3} alt="pht" />
            <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
            <img src={img1} alt="pht" />
            <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
            <img src={img2} alt="pht" />
            <h1 className="slide__title">Slide1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipe__img">
            <img src={img3} alt="pht" />
      Slide 4</SwiperSlide>
      
    </Swiper>
      </>
    )
}


export default Audio;