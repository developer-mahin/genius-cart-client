import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full lg:px-0 px-3">
      <div className="banner-img">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-24 lg:top-1/3 lg:w-1/2 w-full top-28">
        <div className="">
          <h2 className="lg:text-6xl text-2xl text-white lg:py-0 py-2">
            Affordable
            <br />
            Price For Car
            <br />
            Servicing
          </h2>
          <p className="text-white lg:text-xl text-sm lg:mt-8 lg:mb-8">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-5 mt-2">
          <button className="py-2 lg:px-12 btn rounded hover:bg-black text-white bg-[#FF3811]">
            Discover More
          </button>
          <button className="py-2 lg:px-12 btn btn-outline border-[#FFF] bg-transparent text-white hover:bg-black">
            Latest Project
          </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 ">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-[#79797973] hover:bg-[#FF3811] text-white border-none"
        >
          {" "}
          <FaArrowLeft></FaArrowLeft>{" "}
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-[#79797973] hover:bg-[#FF3811] text-white border-none"
        >
          {" "}
          <FaArrowRight></FaArrowRight>{" "}
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
