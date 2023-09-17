import React from "react";
import Logo from "../Pictures/logo/logo.png";
import FaceBookIcon from "../Pictures/SocialMediaIcons/facebook-logo.svg";
import InstagramIcon from "../Pictures/SocialMediaIcons/instagram-icon.svg";
import YoutubeIcon from "../Pictures/SocialMediaIcons/youtube-icon.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer w-[1920px] h-[268px] inline-flex gap-[120px] bg-[#202020] text-[#fff] relative md:w-[1520px]">
      <div className="FooterContacts flex-col items-start inline-flex gap-6 w-[488px] h-[108px] absolute  pl-[200px] py-20">
        <div className="contacts">
          <div className="Phone inline-flex gap-6">
            <p className="">{t("phone")}</p>
            <div className="w-[177px]">
              <p>+374 (94) - 00 - 77 - 07</p>
            </div>
          </div>
          <div className="Address w-[488px] h-5 inline-flex gap-6">
            <p>{t("address")}</p>
            <div className="w-[377px]">
              <p className="AddressText">{t("addressText")}</p>
            </div>
          </div>
          <div className="EmailAddress inline-flex gap-6">
            <p>{t("email")}</p>
            <div className="w-[150px]">
              <p>bellart_itd@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
      <div className="SocialMedia w-[168px] h-[84px] absolute pt-20 pl-[888px] flex flex-col gap-6 shrink-0 md:pl-[808px] md:pb-[104px]">
        <div className="w-[117px] h-5 ">
          <p className="text-[16px] leading-[19.5px] font-light">
            {t("socalNet")}
          </p>
        </div>
        <div className="SocialMediaIcons inline-flex items-start gap-6">
          <div className="faceBook">
            <span className="w-10 h-10 py-[12px] flex justify-center items-center border rounded-[20px]">
              <img className="shrink-0" src={FaceBookIcon} alt="" />
            </span>
          </div>
          <div className="Instagram">
            <span className="w-10 h-10 py-[12px] flex justify-center items-center border rounded-[20px]">
              <img className="w-4 h-4 shrink-0" src={InstagramIcon} alt="" />
            </span>
          </div>
          <div className="Youtube">
            <span className="w-10 h-10 py-[12px] flex justify-center items-center border rounded-[20px]">
              <img className="w-4 h-4 shrink-0" src={YoutubeIcon} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="FooterLogo  w-[235px] h-20 ">
        <div className="footerLogo inline-flex items-center absolute py-[94px] pl-[1485px] gap-6 md:pl-[1085px]">
          <div className="footerLogoText">
            <p className="text-[16px] leading-[19.5px] font-light w-[133px]">
              {t("footerLogoText")}
            </p>
          </div>
          <div className="logoFooter">
            <img className="w-20 h-20" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
