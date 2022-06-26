
import React, { useRef, useState } from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const PropertySlider = ({ listingData }) => {
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
                {listingData.attributes.gallery.data.map((item, index) => {
                    return (
                        <>
                            <SwiperSlide >
                                <div className="slider__data" key={index}>
                                    <div className="slider__img">
                                        <Image src={`http://localhost:1337${item.attributes.url}`} alt="slider image" width={900} height={603} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default PropertySlider