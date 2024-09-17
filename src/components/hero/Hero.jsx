import React from "react";

import heroImg from "../../assets/Header-Hero/car.jpg";

import testimoniolImg from "../../assets/Header-Hero/testimonio.webp";
const Hero = () => {
  return (
    <section className="hero bg-[#0A3E51] relative pb-20">
      <div className="wrapper grid lg:grid-cols-2 place-items-center py-6 px-2 gap-16 lg:gap--">
        <div className="hero__info flex flex-col items-center text-center lg:items-start lg:text-start gap-5 lg:gap-7">
          <p className="hero__info--title w-fit p-3 px-5 text-slate-100 text-sm bg-[#094556] sm:text-nowrap rounded-full animate-fade-in-top-7">
            Experience the future of driving today!
          </p>
          <h1 className=" text-[1.8rem] sm:text-[2.6rem] lg:text-[3.8rem] font-bold leading-[1.04] text-slate-200 animate-fade-in-top-8">
            Unlock the Road to Your Next Adventure
          </h1>
          <p className="text-[#849499] text-[.8rem] sm:text-sm animate-fade-in-top-8">
            Explore an Extensive Selection of Cars, Offering Unmatched Quality,
            Performance, and Affordability for Every Journey
          </p>
          <div className="btns flex gap-7 text-sm animate-fade-in-top-9">
            <button className="bg-[#FFA639] p-3 px-5 rounded-full hover:brightness-110 duration-150 cursor-pointer">
              Hire Me
            </button>
            <button className="hover:underline underline-offset-4 text-slate-200">
              My Work
            </button>
          </div>
        </div>
        <div className="hero__img relative max-w-[18rem]] animate-fade-in-top-10">
          <img
            src={heroImg}
            className="rounded-md max-h-[54rem]"
            alt="img of businessman"
          />
          <div className="absolute max-w-[19rem] border-4 py-4 px-6 border-slate-300 rounded-2xl grid gap-5 top-[60%] right-4 lg:-right-2 bg-[#11111111] backdrop-blur-sm">
            <p className="text-sm text-white drop-shadow-sm">
              "The selection of cars here is unparalleled. Exceptional service
              and quality vehicles!"
            </p>
            <div className="profile flex gap-3 items-center">
              <img
                src={testimoniolImg}
                className="max-w-11 max-h-11 shrink-0 rounded-lg"
                alt="img of smiling person :)"
              />
              <div className="profile__info">
                <p className="font-normal text-white text-[1rem]">John Doe</p>
                <p className="font-light text-[#A1B5BB] text-[.75rem]">
                  Car Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="statistics absolute w-[92%] xs:w-11/12 sm:w-auto py-8 xs:py-16 px-[12%] left-[50%] translate-x-[-50%] flex justify-center items-center flex-col gap-7 lg:gap-10 bottom-[-0%] translate-y-[50%] bg-[#f1faee] rounded-2xl xs:rounded-[2.4rem] shadow-md">
        <h4 className="text-center font-semibold xs:font-normal xs:text-start w-full text-sm md:text-xl lg:text-2xl text-[#265A6A]">
          STATISTIC
        </h4>
        <div className="statistics__container grid grid-cols-2 sm:flex text-center gap-x-10 xs:gap-x-16 gap-y-6 xs:gap-y-8 sm:gap-12 text-[.8rem] lg:gap-20 lg:text-[1rem]">
          <div className="statistic">
            <h2 className="text-3xl lg:text-5xl">300+</h2>
            <p className="text-[#08546C] mt-2 text-nowrap">Project Delivery</p>
          </div>
          <div className="statistic">
            <h2 className="text-3xl lg:text-5xl">8</h2>
            <p className="text-[#08546C] mt-2 text-nowrap">Years Experience</p>
          </div>
          <div className="statistic">
            <h2 className="text-3xl lg:text-5xl">16</h2>
            <p className="text-[#08546C] mt-2 text-nowrap">Awards</p>
          </div>
          <div className="statistic">
            <h2 className="text-3xl lg:text-5xl">5k+</h2>
            <p className="text-[#08546C] mt-2 text-nowrap">Happy Clients</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
