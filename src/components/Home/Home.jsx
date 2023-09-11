import React, { useState, useEffect } from "react";
import HeroBg from "../../components/Pictures/heroSection/bg-photo.png";
import slidePhoto1 from "../../components/Pictures/heroSection/slide-photo-1.png";
import slidePhoto2 from "../../components/Pictures/heroSection/slide-photo-2.png";
import slidePhoto3 from "../../components/Pictures/heroSection/slide-photo-3.png";
import SlideLeft from "../../components/Pictures/heroSection/slide-left.svg";
import SlideRight from "../../components/Pictures/heroSection/slide-right.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const slidePhotos = [HeroBg, slidePhoto1, slidePhoto2, slidePhoto3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const max = slidePhotos.length;

  useEffect(() => {
    const interval = setInterval(() => handleNextSlide(), 10000);
    return () => clearInterval(interval);
  });

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? max - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === max - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="Home">
      {/* HeroSection */}

      <div className="HeroSection relative w-[1920px] h-[807px] overflow-hidden">
        <div
          className="slide-photo-container absolute duration-300 flex "
          style={{
            width: `${max * 100}%`,
            transform: `translateX(-${currentSlide * (100 / max)}%)`,
          }}
        >
          {slidePhotos.map((photo, index) => (
            <div key={index} className=" slide-photo w-[1920px] h-[807px]">
              <img src={photo} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
        <div className="main bg-opacity-75 py-20 relative z-10">
          <div className="Text w-[406px] h-[59px] absolute top-[360px] left-[200px]">
            <p className="text-[48px] leading-[58.51px] font-normal text-[#fff]">
              {t("heroSectionText")}
            </p>
          </div>
          <div className="button absolute top-[659px] left-[200px]">
            <button className="bg-transparent border border-white text-white py-6 px-20 rounded-[40px] gap-6 items-center inline-flex">
              <span className="text-[16px] w-[61px] h-5 leading-[19.5px] font-light">
                {t("heroSectionButtonText")}
              </span>
            </button>
          </div>
          <div className="slide-left absolute top-[659px] left-[461px] w-[68px] h-[68px] shrink-0">
            <img src={SlideLeft} alt="Arrow left" onClick={handlePrevSlide} />
          </div>
          <div className="slide-right absolute top-[659px] left-[545px] w-[68px] h-[68px] shrink-0">
            <img src={SlideRight} alt="Arrow right" onClick={handleNextSlide} />
          </div>
        </div>
      </div>
      {/* About */}
    </div>
  );
};

export default Home;
