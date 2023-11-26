import React from "react";
import { Bell } from "react-feather";
import { SwiperCard } from "./SwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function LeftInfo() {
  //coruosal seeting
  const settings = {
    speed: 500,
    draggable: true,
  };

  const nonDragableSetting = {
    draggable: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const personData = [
    {
      headerName: "Jack F",
      position: "Ex Blackrock PM",
      discription:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      headerName: "Yash P",
      position: "Research, 3poch Crypto Hedge Fund",
      discription:
        "“I use Loch everyday now. I dont think I could analyze crypto whale trends markets without it. Im addicted!”",
    },
    {
      headerName: "Shiv S",
      position: "Co-Founder Magik Labs",
      discription:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];
  return (
    <div className="full-body w-[55%]">
      <div className="h-full py-20 justify-evenly">
        <div className="flex gap-16">
          <div className="ml-14">
            <a className="font-white">
              <Bell color="white" size={40} />
            </a>
            <h4 className="text-4xl text-white pt-4">
              Get notified when a highly correlated whale makes a move.
            </h4>
            <p className="text-xl text-white pt-4 font-sans">
              Find out when a certain whale move more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
          >
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-2 w-[189px] h-[171px]">
                <div className="flex justify-between">
                  <a className="font-white">
                    <Bell color="black" size={20} />
                  </a>
                  <p className="text-sm">Save</p>
                </div>
                <p className="text-sm mt-8 px-4">
                  We’ll be sending notifications to you here
                </p>
                <input
                  className="mt-2 w-[150px] h-[30px] border border-[#E5E5E6] ml-3"
                  type="text"
                ></input>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-2 w-[189px] h-[171px]">
                <div className="flex justify-between">
                  <a className="font-white">
                    <img
                      className="object-contain w-[20px]"
                      src="/barChart.png"
                      alt=""
                    />
                  </a>
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                </div>
                <p className="text-sm mt-6 px-4">
                  We’ll be sending notifications to you here
                </p>
                <div className="w-[80px] h-[20px] bg-[#E5E5E6] mt-3">
                  <p className="text-xs flex justify-center items-cente text-white">
                    {" "}
                    $1,000.00
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-2 w-[189px] h-[171px]">
                <div className="flex justify-between">
                  <a className="font-white">
                    <img
                      className="object-contain w-[20px]"
                      src="/clockclock.png"
                      alt=""
                    />
                  </a>
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                </div>
                <p className="text-sm mt-6 px-4">
                  We’ll be sending notifications to you here
                </p>

                <div className="w-[80px] h-[20px] bg-[#E5E5E6] mt-3">
                  <p className="text-xs flex justify-center items-center text-white">
                    {" "}
                    &gt;30 days
                  </p>
                </div>
                <p className="text-xs mt-1 px-4">Become Active</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex mx-14 mt-16">
          <div className="max-w-[40%]">
            <img
              className="object-contain"
              src="/output-onlinepngtools.png"
              alt="Girl in a jacket"
            />
          </div>
          <div className="text-end pl-8">
            <div className="flex justify-end">
              <img className="object-contain" src="/Vector.png" alt="" />
            </div>
            <h4 className="text-4xl text-white pt-4">
              Watch what the whales are doing
            </h4>
            <p className="text-xl text-white pt-4 font-sans">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing
            </p>
          </div>
        </div>
        <div className="mx-14">
          <h4 className="text-4xl text-white pt-4 text-end mr-14">
            Testimonials
          </h4>
          <hr className="text-[#E5E5E680] mt-6" />
        </div>
        <div className="mt-8 ml-14 flex items-end">
          <img className="object-contain" src="/VectorS.png" alt="" />

          <Swiper slidesPerView={2} centeredSlides={true}         spaceBetween={30}
 className="ml-5">
            {personData.map((data, index) => (
              <SwiperSlide key={index} className="max-w-fit">
                <div key={index} className="slider-item">
                  <SwiperCard props={data}></SwiperCard>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
