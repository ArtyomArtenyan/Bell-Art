import React from "react";
import Logo from "../Pictures/logo/Logo_Photo.svg";
import FaceBookIcon from "../Pictures/SocialMediaIcons/facebook-logo.svg";
import InstagramIcon from "../Pictures/SocialMediaIcons/instagram-icon.svg";
import YoutubeIcon from "../Pictures/SocialMediaIcons/youtube-icon.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="FooterWrapper">
      <div className="Footer w-full flex justify-around py-20  bg-[#202020] text-[#fff] lg:p-20 sr:flex-col sr:gap-20 xg:p-20 xg:pr-[36px]  xg:pl-6">
        <div className="FooterContacts">
          <div className="Contacts flex flex-col gap-6">
            <div className="Phone flex gap-6 text-[16px] sr:text-[14px]">
              <p>{t("phone")}</p>
              <div className="text-[16px] sr:text-[14px]">
                <p>+374 (94) - 00 - 77 - 07</p>
              </div>
            </div>

            <div className="Address flex gap-6 text-[16px] sr:text-[14px]">
              <p>{t("address")}</p>
              <div>
                <p className="AddressText text-[16px] sr:text-[14px]">
                  {t("addressText")}
                </p>
              </div>
            </div>
            <div className="EmailAddress  flex gap-6 text-[16px] sr:text-[14px]">
              <p>{t("email")}</p>
              <div className="text-[16px] sr:text-[14px]">
                <p>bellart_itd@mail.ru</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SocialMedia flex flex-col gap-6">
          <div>
            <p className="text-[16px] sr:text-[14px] leading-[19.5px] font-light">
              {t("socalNet")}
            </p>
          </div>
          <div className="SocialMediaIcons inline-flex items-start gap-6">
            <div className="faceBook">
              <span className="w-10 h-10 flex justify-center items-center border rounded-[20px]">
                <img className="shrink-0" src={FaceBookIcon} alt="" />
              </span>
            </div>
            <div className="Instagram">
              <span className="w-10 h-10 flex justify-center items-center border rounded-[20px]">
                <img className="w-4 h-4 shrink-0" src={InstagramIcon} alt="" />
              </span>
            </div>
            <div className="Youtube">
              <span className="w-10 h-10 flex justify-center items-center border rounded-[20px]">
                <img className="w-4 h-4 shrink-0" src={YoutubeIcon} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="FooterLogo flex lg:hidden">
          <div className="footerLogo inline-flex items-center gap-6 ">
            <div className="footerLogoText">
              <p className="text-[16px] leading-[19.5px] font-light w-[133px]">
                {t("footerLogoText")}
              </p>
            </div>
            <div className="logoFooter">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
