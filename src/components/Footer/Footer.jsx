import React from "react";
import Logo from "../Pictures/logo/logo.png";
import FaceBookIcon from "../Pictures/SocialMediaIcons/facebook-logo.svg";
import InstagramIcon from "../Pictures/SocialMediaIcons/instagram-icon.svg";
import YoutubeIcon from "../Pictures/SocialMediaIcons/youtube-icon.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer w-[1920px] h-[268px] inline-flex gap-[120px] bg-[#202020] text-[#fff] relative">
      <div className="FooterContacts flex-col items-start inline-flex gap-6 w-[488px] h-[108px] absolute  left-[200px] top-20">
        <div className="Phone inline-flex gap-6">
          <p className="">{t("phone")}</p>
          <p>+374 (94) - 00 - 77 - 07</p>
        </div>
        <div className="Address inline-flex gap-6">
          <p>{t("address")}</p>
          <p className="AddressText">{t("addressText")}</p>
        </div>
        <div className="EmailAddress inline-flex gap-6">
          <p>{t("email")}</p>
          <p>bellart_itd@mail.ru</p>
        </div>
      </div>
      <div className="SocialMedia w-[168px] h-[84px] absolute top-20 left-[888px] flex flex-col gap-6 shrink-0">
        <p className="w-[117px] h-5 text-[16px] leading-[19.5px] font-light">
          {t("socalNet")}
        </p>
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
      <div className="FooterLogo inline-flex items-center gap-6 w-[235px] h-20 absolute top-[94px] left-[1485px] ">
        <p className="text-[16px] leading-[19.5px] font-light">
          {t("footerLogoText")}
        </p>
        <div className="logo">
          <img className="w-20 h-20" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
