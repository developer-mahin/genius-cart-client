import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen lg:pb-12 pb-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full relative">
          <img
            src={person}
            className="rounded-lg lg:w-[460px] lg:h-[475px] h-full w-full shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="rounded-lg border-[10px] hidden lg:block border-white absolute top-1/2 left-1/3 w-[327px] h-[332px] shadow-2xl"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="lg:text-2xl text-xl font-bold text-[#FF3811]">About Us</p>
          <h1 className="lg:text-5xl text-3xl font-bold leading-none">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
          </p>
          <button className="btn bg-[#FF3811] text-white py-2 px-9 border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
