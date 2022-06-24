import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const PropertySlider = () => {
    return (
        <section className="property__slider container">
            <div className="property__slider__container">
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider__img">
                            <img
                                src="https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/036-1170x785.jpg"
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__img">
                            <img
                                src="https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/036-1170x785.jpg"
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__img">
                            <img
                                src="https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/036-1170x785.jpg"
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default PropertySlider;
