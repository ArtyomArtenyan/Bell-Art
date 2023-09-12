import React, { useState, useEffect } from "react";
import HeroBg from "../../components/Pictures/heroSection/bg-photo.png";
import slidePhoto1 from "../../components/Pictures/heroSection/slide-photo-1.png";
import slidePhoto2 from "../../components/Pictures/heroSection/slide-photo-2.png";
import slidePhoto3 from "../../components/Pictures/heroSection/slide-photo-3.png";
import SlideLeft from "../../components/Pictures/heroSection/slide-left.svg";
import SlideRight from "../../components/Pictures/heroSection/slide-right.svg";
import AdvantagesBgPhoto1 from "../../components/Pictures/Advantages/bg-photo.png";
import AdvantagesBgPhoto2 from "../../components/Pictures/Advantages/bg-photo2.png";
import AdvantagesBgPhoto3 from "../../components/Pictures/Advantages/bg-photo3.png";

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
    <div className="Home gap-[120px] inline-flex flex-col items-center">
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
      <div className="About text-[#202020] flex py-[120px] pl-20 pr-[99px]  flex-col justify-center items-start gap-16 shadow-custom w-[1520px] h-[723px]">
        <div className="AboutUs w-[292px] h-[59px]">
          <p className="text-[48px] font-normal leading-[58.51px]">
            {t("aboutUs")}
          </p>
        </div>
        <div className="AboutUsText w-[1341px] h-[360px]">
          <p className="text-[20px] font-light leading-9">{t("aboutUsText")}</p>
        </div>
      </div>
      {/* Advantages */}
      <div className="Advantages w-[1520px] h-[681px] shadow-custom relative">
        <div className="AdvantagesUs text-[#202020] w-[625px] h-[59px] absolute top-[120px] left-20">
          <p className="text-[48px] font-normal leading-[58.51px]">
            {t("advantagesUs")}
          </p>
        </div>
        <div className="AdvantagesLayout w-[1256px] h-[282px] absolute left-[88px] top-[259px] gap-12">
          <div className="Layout inline-flex items-start gap-12 z-0">
            <div className="LayoutBox1 w-[400px] h-[282px] shrink-0 relative">
              <img src={AdvantagesBgPhoto1} alt="Advantages Image 1" />
              <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
              <span className="absolute top-10 left-[178px] w-12 h-[96px] font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                1
              </span>
              <p className="absolute top-[162px] left-10 w-[320px] h-20 text-center text-[20px] font-light leading-[24.38px] text-[#fff]">
                {t("advantagesText1")}
              </p>
            </div>
            <div className="LayoutBox2 w-[400px] h-[282px] shrink-0 relative">
              <img src={AdvantagesBgPhoto2} alt="Advantages Image 2" />
              <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
              <span className="absolute top-10 left-[178px] w-12 h-[96px] font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                2
              </span>
              <p className="absolute top-[162px] left-10 w-[320px] h-20 text-center text-[20px] font-light leading-[24.38px] text-[#fff]">
                {t("advantagesText2")}
              </p>
            </div>
            <div className="LayoutBox3 w-[400px]  h-[282px] shrink-0 relative">
              <img src={AdvantagesBgPhoto3} alt="Advantages Image 3" />
              <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
              <span className="absolute top-10 left-[178px] w-12 h-[96px] font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                3
              </span>
              <p className="absolute top-[162px] left-10 w-[320px] h-20 text-center text-[20px] font-light leading-[24.38px] text-[#fff]">
                {t("advantagesText3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
