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
    <div className="Home  w-[1920px] gap-[120px] inline-flex flex-col items-center md:w-[1520px]">
      {/* HeroSection */}
      <div className="HeroSection relative w-full h-[807px] overflow-hidden md:w-[1520px]">
        <div
          className="slide-photo-container absolute duration-300 flex w-[400%] md:w-[504%]"
          style={{
            transform: `translateX(-${currentSlide * (100 / max)}%)`,
          }}
        >
          {slidePhotos.map((photo, index) => (
            <div key={index} className=" slide-photo w-full h-[807px]">
              <img src={photo} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
        <div className="main">
          <div className="Text absolute pt-[360px] pl-[200px] pr-[1314px] pb-[388px]">
            <div className=" w-[406px] h-[59px]">
              <p className="text-[48px] leading-[58.51px] font-normal text-[#fff]">
                {t("heroSectionText")}
              </p>
            </div>
          </div>
          <div className="button absolute pt-[659px] pl-[200px] pb-20">
            <button className="bg-transparent border border-white text-white py-6 px-20 rounded-[40px] gap-6 items-center inline-flex">
              <span className="text-[16px] w-[61px] h-5 leading-[19.5px] font-light">
                {t("heroSectionButtonText")}
              </span>
            </button>
          </div>
          <div className="slide-left absolute pt-[659px] pl-[461px] pb-20  shrink-0">
            <img src={SlideLeft} alt="Arrow left" onClick={handlePrevSlide} />
          </div>
          <div className="slide-right absolute pt-[659px] pl-[545px] pb-20 shrink-0">
            <img src={SlideRight} alt="Arrow right" onClick={handleNextSlide} />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="About text-[#202020] flex py-[120px] pl-20 pr-[99px]  flex-col justify-center items-start gap-16 shadow-custom w-[1520px] h-[723px] md:w-[1120px] md:pt-20 md:pl-20 md:pr-20 md:pb-[70px]">
        <div className="AboutUs w-[292px] h-[59px]">
          <p className="text-[48px] font-normal leading-[58.51px]">
            {t("aboutUs")}
          </p>
        </div>
        <div className="AboutUsText w-[1341px] h-[360px] md:w-[960px] md:h-[384px]">
          <p className="text-[20px] font-light leading-9 md:text-[18px] md:leading-[32.4px]">
            {t("aboutUsText")}
          </p>
        </div>
      </div>
      {/* Advantages */}
      <div className="Advantages w-[1520px] h-[681px] shadow-custom relative md:w-[1120px] md:h-[581px]  md:pr-10 md:gap-20">
        <div className="AdvantagesUs text-[#202020] absolute pt-[120px] pl-20 md:pt-20">
          <p className="text-[48px] font-normal leading-[58.51px]">
            {t("advantagesUs")}
          </p>
        </div>
        <div className="AdvantagesLayout w-[1256px] h-[282px] absolute pl-[88px] pt-[259px]">
          <div className="Layout inline-flex items-start gap-12 z-0  md:gap-5">
            <div className="LayoutBox1 box w-[400px] h-[282px] shrink-0 relative md:w-[320px] md:h-[282px]">
              <div className="layerBg absolute inset-0 bg-[#202020] opacity-[0.8] shrink-0"></div>
              <div className="absolute pt-10 pl-[178px] md:px-[136px] md:pb-6">
                <span className="w-12 h-[96px] font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                  1
                </span>
              </div>
              <div className="absolute pt-[162px] px-10">
                <p className="w-[320px] h-20 text-center text-[20px] font-light leading-[24.38px] text-[#fff]  md:w-[240px] md:h-20">
                  {t("advantagesText1")}
                </p>
              </div>
              <img
                className="md:w-[320px] md:h-[282px]"
                src={AdvantagesBgPhoto1}
                alt="Advantages Image 1"
              />
            </div>
            <div className="LayoutBox2 box w-[400px] h-[282px] shrink-0 relative md:w-[320px] md:h-[282px]">
              <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
              <div className="absolute pt-10 pl-[178px] md:px-[136px] md:pb-6">
                <span className="w-12 h-[96px] font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                  2
                </span>
              </div>
              <div className="absolute pt-[162px] pl-10 ">
                <p className="w-[320px] h-20 text-center text-[20px] font-light leading-[24.38px] text-[#fff] md:w-[240px] md:h-20">
                  {t("advantagesText2")}
                </p>
              </div>
              <img
                className="md:w-[320px] md:h-[282px]"
                src={AdvantagesBgPhoto2}
                alt="Advantages Image 2"
              />
            </div>
            <div className="LayoutBox3 box w-[400px]  h-[282px] shrink-0 relative md:w-[320px] md:h-[282px]">
              <div className="absolute inset-0 bg-[#202020] opacity-[0.8]"></div>
              <div className="absolute pt-10 pl-[178px] md:px-[136px] md:pb-6">
                <span className="w-12 h-[96px] font-light text-[80px] leading-[97.52px] items-center text-[#fff] md:w-[240px] md:h-20">
                  3
                </span>
              </div>
              <div className="absolute pt-[162px] pl-10 ">
                <p className="w-[320px] h-20 text-center text-[20px] font-light leading-[24.38px] text-[#fff] md:w-[240px] md:h-20">
                  {t("advantagesText3")}
                </p>
              </div>
              <img
                className="md:w-[320px] md:h-[282px]"
                src={AdvantagesBgPhoto3}
                alt="Advantages Image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
