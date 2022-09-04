import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            class="hero min-h-screen"
            style={{
              backgroundImage: "url('https://i.ibb.co/m5qKFr7/slide01.jpg')",
              backgroundSize: "cover",
              overflow: "hidden"
            }}
          >
            <div class="hero-content text-center text-neutral-content opacity-80 bg-black p-0">
              <div class="max-w-screen-sm text-white glass p-12">
                <h1 class="mb-5 text-5xl font-bold text-primary">Hand Tools</h1>
                <p class="mb-5 text-2xl">
                  Global top rated high quality hand tools manufacturer and exporter
                </p>
                <button class="btn btn-lg btn-outline btn-primary">Explore More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="hero min-h-screen"
            style={{
              backgroundImage: "url('https://i.ibb.co/X8xM3gR/slide02.jpg')",
            }}
          >
            <div class="hero-content text-center text-neutral-content opacity-80 bg-black p-0">
              <div class="max-w-screen-sm text-white glass p-12">
                <h1 class="mb-5 text-5xl font-bold text-primary">Cutting Tools</h1>
                <p class="mb-5 text-2xl">
                  When quality matters to your customers, choosing the right tools is important.
                </p>
                <button class="btn btn-lg btn-outline btn-primary">Explore More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="hero min-h-screen"
            style={{
              backgroundImage: "url('https://i.ibb.co/TmB3FrL/slide03.jpg')",
            }}
          >
            <div class="hero-content text-center text-neutral-content opacity-80 bg-black p-0">
              <div class="max-w-screen-sm text-white glass p-12">
                <h1 class="mb-5 text-5xl font-bold text-primary">Industrial Tools</h1>
                <p class="mb-5 text-2xl">
                  Serving the market from the last 40 years.
                </p>
                <button class="btn btn-lg btn-outline btn-primary">Explore More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/X8xM3gR/slide02.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/TmB3FrL/slide03.jpg"
            alt=""
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
