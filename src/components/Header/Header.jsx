import React from "react";
import Logo from "../Pictures/logo/Logo_Photo.jpg";
import ru from "../Pictures/flags/ru.jpg";
import en from "../Pictures/flags/en.jpg";

const Header = () => {
  return (
    <nav className="bg-blue-#fff w-[1920px] h-[120px] shrink-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex w-[84px] h-[84px] pt-0 pr-[10px] pl-[10px] flex-col justify-center items-center gap-[5px] text-center relative left-[200px] top-[18px]">
          <img src={Logo} alt="Logo" className="w-16 h-16 inline" />
          <p className="logo name text-[#e5b727] text-sm/[14.63px] font-normal	w-14 h-[15px] ">
            Բելլարտ
          </p>
        </div>

        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-#202020 ">
              Գլխավոր
            </a>
          </li>
          <li>
            <a href="#" className="text-#202020 ">
              Արտադրանք
            </a>
          </li>
          <li>
            <a href="#" className="text-#202020 ">
              Ծառայություններ
            </a>
          </li>
          <li>
            <a href="#" className="text-#202020 ">
              Կոնտակտներ
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <img
            src={ru}
            alt="ru flag"
            className="w-6 h-6 cursor-pointer shrink-0"
          />
          <img
            src={en}
            alt="en flag"
            className="w-6 h-6 cursor-pointer shrink-0"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
