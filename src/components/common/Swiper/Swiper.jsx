import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

export default (props) => {

    const slider = props.images.map(x => <SwiperSlide><img onClick={props.clickImage} src={x.src} alt=""/></SwiperSlide>)
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={true}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slider}

        </Swiper>
    );
};