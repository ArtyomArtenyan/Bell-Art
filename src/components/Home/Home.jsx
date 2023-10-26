import React, { useState, useEffect } from "react";
import slidePhoto1 from "../../components/Pictures/heroSection/Slide_Photo_1.jpg";
import slidePhoto2 from "../../components/Pictures/heroSection/Slide_Photo_2.jpg";
import slidePhoto3 from "../../components/Pictures/heroSection/Slide_Photo_3.jpg";
import slidePhoto4 from "../../components/Pictures/heroSection/NZ5_1195.jpg";
import slidePhoto5 from "../../components/Pictures/heroSection/NZ5_1196.jpg";
import SlideLeft from "../../components/Pictures/heroSection/slide-left.svg";
import SlideRight from "../../components/Pictures/heroSection/slide-right.svg";
import AdvantagesBgPhoto1 from "../../components/Pictures/Advantages/BG_Photo.jpg";
import AdvantagesBgPhoto2 from "../../components/Pictures/Advantages/BG_Photo2.jpg";
import AdvantagesBgPhoto3 from "../../components/Pictures/Advantages/BG_Photo3.jpg";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const slidePhotos = [
    slidePhoto1,
    slidePhoto2,
    slidePhoto3,
    slidePhoto4,
    slidePhoto5,
  ];
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
    <div className="HomeWrapper w-full inline-flex flex-col z-[9]">
      <div className="HeroSection">
        <div className="Slider relative w-full  overflow-hidden h-[807px]">
          <div
            className={`SlidePhoto duration-[1100ms] w-[600%] h-[807px] flex`}
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / slidePhotos.length
              }%)`,
            }}
          >
            {slidePhotos.map((photo, index) => (
              <div
                key={index}
                className="slide-photo bg-cover object-cover w-full  h-full"
                style={{ backgroundImage: `url(${photo})` }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[#202020] opacity-[0.8] "></div>
          <div className="absolute inset-0 flex justify-start pl-[200px] lg:pl-[120px] sr:pl-20 xg:pl-6">
            <div className="SlideText absolute pt-[240px] sr:pt-[256px]">
              <p className="text-[48px] lg:text-[40px] sr:text-[32px] xg:text-[22px] leading-[58.51px] sr:leading-[44.8px] xg:leading-[ 30.8px] font-normal text-[#fff]">
                {t("heroSectionText")}
              </p>
            </div>
            <div className="SlideButtons flex justify-center pt-[659px] lg:pt-[649px]">
              <div className="button pr-10 xg:pr-6">
                <button className="bg-transparent border border-white text-white py-6 px-20 sr:px-16 rounded-[40px] gap-6 sr:gap-5 xg:gap-5 items-center inline-flex">
                  <span className="text-[16px] w-[61px] h-5 leading-[19.5px] font-light">
                    {t("heroSectionButtonText")}
                  </span>
                </button>
              </div>

              <div className="Arrows flex gap-4 xg:gap-2">
                <div className="left shrink-0">
                  <img
                    className="sr:w-[60px] sr:h-[60px] xg:w-[60px] xg:h-[60px] "
                    src={SlideLeft}
                    alt="Arrow left"
                    onClick={handlePrevSlide}
                  />
                </div>
                <div className="right shrink-0">
                  <img
                    className="sr:w-[60px] sr:h-[60px] xg:w-[60px] xg:h-[60px] "
                    src={SlideRight}
                    alt="Arrow right"
                    onClick={handleNextSlide}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutSection flex justify-center flex-row  py-[120px] ">
        {/* About */}
        <div className="About text-[#202020] w-[79.1666666667vw] h-full flex py-[120px] pl-20 pr-[99px] flex-col justify-center items-start gap-16 shadow-custom md:pt-20 md:px-20 md:pb-[70px] lg:pb-20 lg:gap-10 lg:px-10 xg:py-10 xg:px-6">
          <div className="AboutUs ">
            <p className="text-[48px] font-normal leading-[58.51px] lg:text-[5vw] sr:text-[32px] xg:text-[22px]">
              {t("aboutUs")}
            </p>
          </div>

          <div className="AboutUsText w-full h-full">
            <p className="text-[20px] font-light leading-9 md:text-[18px] md:leading-[32.4px] lg:text-[15px] lg:leading-[27px] xg:text-[11px] xg:leading-[19.8px]">
              {t("aboutUsText")}
            </p>
          </div>
        </div>
      </div>
      {/* Advantages */}
      <div className="AdvantagesSection flex justify-center  pt-[120px] pb-[120px]">
        <div className="Advantages w-[79.1666666667vw] mb-[120px] flex flex-col shadow-custom  px-[120px] pt-[120px] pb-20 gap-20 sr:gap-10 md:pl-20 md:pr-10 md:py-20 lg:py-20 lg:pl-10 lg:pr-0 xg:pb-[60px] xg:pl-6">
          <div className="AdvantagesUsText">
            <p className="text-[48px] font-normal lg:text-[43px] sr:text-[5vw]  leading-[58.51px]">
              {t("advantagesUs")}
            </p>
          </div>
          <div className="AdvantagesLayout">
            <div className="lg:overflow-auto">
              <div className="Layout flex justify-center lg:justify-normal flex-nowrap">
                <div className="LayoutBox1 box  shrink-0 relative flex  w-[22.06vw] lg:w-[320px] justify-center  ml-12 md:ml-5">
                  <div className="layerBg absolute inset-0 bg-[#202020] opacity-[0.8] shrink-0"></div>
                  <div className="absolute flex items-center flex-col gap-6 mt-10">
                    <span className="font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                      1
                    </span>

                    <p className="text-center text-[20px] md:text-[18px] font-light leading-[24.38px] text-[#fff]">
                      {t("advantagesText1")}
                    </p>
                  </div>
                  <img
                    className="w-[22.06vw] h-[282px] lg:w-[320px]"
                    src={AdvantagesBgPhoto1}
                  />
                </div>
                <div className="LayoutBox2 box  shrink-0 relative flex justify-center w-[22.06vw] lg:w-[320px] ml-12 md:ml-5">
                  <div className="layerBg absolute inset-0 bg-[#202020] opacity-[0.8] shrink-0"></div>
                  <div className="absolute flex items-center flex-col gap-6 mt-10">
                    <span className="font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                      2
                    </span>

                    <p className="text-center text-[20px] md:text-[18px] font-light leading-[24.38px] text-[#fff]">
                      {t("advantagesText2")}
                    </p>
                  </div>
                  <img
                    className="w-[22.06vw]  h-[282px] lg:w-[320px]"
                    src={AdvantagesBgPhoto2}
                  />
                </div>
                <div className="LayoutBox3 box  shrink-0 relative flex justify-center w-[22.06vw] lg:w-[320px] mx-12 md:mx-5">
                  <div className="layerBg absolute inset-0 bg-[#202020] opacity-[0.8] shrink-0"></div>
                  <div className="absolute flex items-center flex-col gap-6 mt-10">
                    <span className="font-light text-[80px] leading-[97.52px] items-center text-[#fff]">
                      3
                    </span>

                    <p className="text-center text-[20px] md:text-[18px] font-light leading-[24.38px] text-[#fff]">
                      {t("advantagesText3")}
                    </p>
                  </div>
                  <img
                    className="w-[22.06vw] h-[282px] lg:w-[320px]"
                    src={AdvantagesBgPhoto3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
