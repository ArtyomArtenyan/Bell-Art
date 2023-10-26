import React from "react";
import closeButton from "../Pictures/Products/Close_Button.svg";

const GoodsModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) {
    return null;
  }

  const { img, text, goodsText, price } = product;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="modal-container w-[79.2vw] bg-white shadow-custom relative">
        <div className="modal-content flex flex-row h-[462px]">
          <div className="modal-image">
            <img className="w-[25vw] h-full" src={img} alt={text} />
          </div>
          <div className="modal-text h-full pl-[60px] pt-20 pb-20">
            <h2 className="pb-10 text-[32px] font-normal font-montserrat">
              {text}
            </h2>
            <p className=" w-[45.87vw] md:w-[31.6vw] text-neutral-800 text-[20px] md:text-[18px] font-light font-montserrat leading-9">
              {goodsText}
            </p>
            <p className="price pt-10 text-black text-[32px] font-normal font-montserrat ">
              {price} դրամ
            </p>
          </div>
          <div
            className="modal-close-button absolute right-6 top-6"
            onClick={onClose}
          >
            <img src={closeButton} alt="Close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsModal;
