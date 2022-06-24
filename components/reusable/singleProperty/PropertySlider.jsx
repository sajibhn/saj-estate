
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const PropertySlider = () => {
    return (
        <div className="slider__content container">
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide >
                    <div className="slider__data">
                        <div className="slider__img">
                            <img src='https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/043-1170x785.jpg' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="slider__data">
                        <div className="slider__img">
                            <img src='https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/043-1170x785.jpg' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default PropertySlider