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
      description:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      headerName: "Yash P",
      position: "Research, 3poch Crypto Hedge Fund",
      description:
        "“I use Loch everyday now. I dont think I could analyze crypto whale trends markets without it. Im addicted!”",
    },
    {
      headerName: "Shiv S",
      position: "Co-Founder Magik Labs",
      description:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];
  return (
    <div className="full-body lg:w-[55%]">
      <div className="h-full py-20 justify-evenly">
        <div className="lg:flex gap-16 px-4 lg:px-0">
          <div className="lg:ml-14">
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
            className="mt-8 lg:mt-0"
          >
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-4 lg:w-[189px] w-full mx-auto h-[171px] flex flex-col gap-1 justify-between">
                <div className="flex justify-between">
                  <a className="font-white">
                    <Bell color="black" size={20} />
                  </a>
                  <p className="text-sm">Save</p>
                </div>
                <p className="text-sm">
                  We’ll be sending notifications to you here
                </p>
                <input
                  className="mt-2 w-[150px] h-[30px] border border-[#E5E5E6]"
                  type="text"
                ></input>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-4 mx-auto lg:w-[189px] w-full h-[171px] flex flex-col gap-1 justify-between">
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
                <p className="text-sm">
                  We’ll be sending notifications to you here
                </p>
                  <p className="text-xs flex justify-center items-center text-white w-[80px] h-[20px] bg-[#E5E5E6]">
                    {" "}
                    $1,000.00
                  </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md mx-auto p-4 lg:w-[189px] w-full h-[171px] flex flex-col gap-1 justify-between">
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
                <p className="text-sm">
                  We’ll be sending notifications to you here
                </p>

                <div className="w-[80px] h-[20px]  mt-3">
                  <p className="text-xs flex justify-center items-center text-white p-1 bg-[#E5E5E6]">
                    &gt;30 days
                  </p>
                </div>
                <p className="text-xs mt-1">Become Active</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:flex lg:mx-14 mt-16 px-4 lg:px-0">
          <div className="lg:max-w-[40%] max-w-full">
            <img
              className="object-contain"
              src="/output-onlinepngtools.png"
              alt="Girl in a jacket"
            />
          </div>
          <div className="lg:text-end text-center lg:pl-8 mt-6 lg:mt-0">
            <div className="lg:flex hidden lg:justify-end">
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
        <div className="mt-8 lg:ml-14 flex lg:items-end lg:flex-row flex-col gap-8 lg:gap-0 items-center">
          <img className="object-contain" src="/VectorS.png" alt="" />

          <Swiper
            slidesPerView={1}
            className="lg:ml-5 px-4 max-w-full w-full"
            spaceBetween={30}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                centeredSlides: true,
              },
            }}
          >
            {personData.map((data, index) => (
              <SwiperSlide key={index} className="">
            
                  <SwiperCard props={data}/>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
