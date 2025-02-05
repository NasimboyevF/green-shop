import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Flower from "../../assets/flower.png";

const MySwiper: React.FC = () => {
  return (
    <div className="bg-[#F5F5F580]">
      <div className="container">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          onSwiper={(swiper: SwiperType) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div>
              <div className="container flex items-center justify-between">
                <div>
                  <h3 className="text-[14px] font-medium leading-4 tracking-[0.1em] text-left text-[#3D3D3D]">
                    Welcome to GreenShop
                  </h3>
                  <h1 className="text-[70px] font-black leading-[70px] text-left text-[#3D3D3D] py-2">
                    Let's Make a <br /> Better{" "}
                    <span className="text-[#46A358]">Planet</span>{" "}
                  </h1>
                  <p className="text-[14px] font-normal leading-[24px] text-left text-[#727272] py-1">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. <br /> Use our plants to create an unique
                    Urban Jungle. Order your favorite plants!
                  </p>
                  <div className="py-11">
                    <button className="w-[140px] h-[40px] rounded-[6px] text-[#FFFFFF] bg-[#46A358] text-[16px] font-bold leading-[20px] flex items-center justify-center">
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={Flower} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="container flex items-center justify-between">
                <div>
                  <h3 className="text-[14px] font-medium leading-4 tracking-[0.1em] text-left text-[#3D3D3D]">
                    Welcome to GreenShop
                  </h3>
                  <h1 className="text-[70px] font-black leading-[70px] text-left text-[#3D3D3D] py-2">
                    Let's Make a <br /> Better{" "}
                    <span className="text-[#46A358]">Planet</span>{" "}
                  </h1>
                  <p className="text-[14px] font-normal leading-[24px] text-left text-[#727272] py-1">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. <br /> Use our plants to create an unique
                    Urban Jungle. Order your favorite plants!
                  </p>
                  <div className="py-11">
                    <button className="w-[140px] h-[40px] rounded-[6px] text-[#FFFFFF] bg-[#46A358] text-[16px] font-bold leading-[20px] flex items-center justify-center">
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={Flower} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="container flex items-center justify-between">
                <div>
                  <h3 className="text-[14px] font-medium leading-4 tracking-[0.1em] text-left text-[#3D3D3D]">
                    Welcome to GreenShop
                  </h3>
                  <h1 className="text-[70px] font-black leading-[70px] text-left text-[#3D3D3D] py-2">
                    Let's Make a <br /> Better{" "}
                    <span className="text-[#46A358]">Planet</span>{" "}
                  </h1>
                  <p className="text-[14px] font-normal leading-[24px] text-left text-[#727272] py-1">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. <br /> Use our plants to create an unique
                    Urban Jungle. Order your favorite plants!
                  </p>
                  <div className="py-11">
                    <button className="w-[140px] h-[40px] rounded-[6px] text-[#FFFFFF] bg-[#46A358] text-[16px] font-bold leading-[20px] flex items-center justify-center">
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={Flower} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MySwiper;
