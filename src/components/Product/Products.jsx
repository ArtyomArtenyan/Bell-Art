import React, { useState } from "react";
import ProductsSection from "../Pictures/Products/ProductsSection.jpg";
import goods1 from "../Pictures/Products/Good_Photo1.jpg";
import goods2 from "../Pictures/Products/Good_Photo2.jpg";
import goods3 from "../Pictures/Products/Good_Photo3.jpg";
import { useParams } from "react-router-dom";
import GoodsModal from "./GoodsModal";

const Products = () => {
  const { productId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const Product1 = {
    id: "1",
    name: "Արտադրանք 1",
    image: ProductsSection,
    text: "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում: Մեր կիրառած համապարփակ մոտեցումը նպաստում է ինժեներական բարդ լուծումների մշակմանը լավագույն կապիտալ ծախսերով, բարձր ծախսարդյունավետությամբ և բնապահպանական արդյունավետությամբ:",
    goods: [
      {
        img: goods1,
        text: "Ապրանք 1",
        price: 10000,
        goodsText:
          "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում:",
      },
      {
        img: goods2,
        text: "Ապրանք 2",
        price: 15000,
        goodsText:
          "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում:",
      },
      {
        img: goods3,
        text: "Ապրանք 3",
        price: 12000,
        goodsText:
          "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում:",
      },
    ],
  };

  const Product2 = {
    id: "2",
    image: ProductsSection,
    name: "Արտադրանք 2",
    text: "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում: Մեր կիրառած համապարփակ մոտեցումը նպաստում է ինժեներական բարդ լուծումների մշակմանը լավագույն կապիտալ ծախսերով, բարձր ծախսարդյունավետությամբ և բնապահպանական արդյունավետությամբ:",
    goods: [
      {
        img: goods1,
        text: "Ապրանք 1",
        price: 10000,
        goodsText:
          "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում:",
      },
      {
        img: goods2,
        text: "Ապրանք 2",
        price: 15000,
        goodsText:
          "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում:",
      },
      {
        img: goods3,
        text: "Ապրանք 3",
        price: 12000,
        goodsText:
          "“Բելլ Արտ” ՍՊԸ-ն առաջարկում է հանքարդյունաբերության և մետալուրգիայի ոլորտում ծառայությունների ամբողջական շրջանակ՝ սկսած ավանդների գնահատումից մինչև բարդության բոլոր մակարդակների EPCM լուծումներ, ինչպես Հայաստանում, այնպես էլ արտերկրում:",
      },
    ],
  };

  let currentProduct;

  if (productId === Product1.id) {
    currentProduct = Product1;
  } else if (productId === Product2.id) {
    currentProduct = Product2;
  } else {
    return <p>Product not found</p>;
  }
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="ProductLayout w-full h-full flex-col justify-start items-center inline-flex">
      <div className="ProductsSection w-full h-[800px]">
        <div className="ProductBg w-full h-[800px] relative bg-white shadow-custom">
          <div className="ProductPhoto w-full h-[800px] left-0 top-0 absolute">
            <img
              className="BgPhoto object-cover w-full h-[800px] left-0 top-0 absolute"
              src={currentProduct.image}
            />
            <div className="BgLayer w-full h-[800px] left-0 top-0 absolute bg-neutral-800 bg-opacity-80" />
          </div>
          <div className="1 pl-[200px] pb-[141px] leading-[36px] bottom-0 absolute text-white text-[48px] lg:text-[40px] sr:text-[32px] xg:text-[22px] font-normal font-['Montserrat arm'] lg:pl-[120px] lg:pb-[151px] sr:pl-20 sr:pb-[161px] xg:pl-6 xg:pb-[97px]">
            {currentProduct.name}
          </div>
        </div>
      </div>

      <div className="ProductContent w-[79.1666666667vw] md:w-[73.7vw] sr:w-[75vw] lg:w-[78.6vw]  m-auto ">
        <div className="py-[120px] flex justify-center flex-row">
          <div className="Text shadow-custom w-[79.1666666667vw] md:w-[73.7vw] lg:w-[78.6vw]  sr:w-[75vw]  h-full py-[120px] px-20 md:p-20 sr:px-10 sr:py-20 xg:px-6 xg:py-10">
            <div className="EPCM-Text w-full  h-full">
              <p className="text-[20px] font-light leading-9 md:text-[18px] md:leading-[32.4px] lg:text-[15px] lg:leading-[27px] xg:text-[11px] xg:leading-[19.8px]">
                {currentProduct.text}
              </p>
            </div>
          </div>
        </div>
        <GoodsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
        <div className="pb-[120px]">
          <div className="Goods gap-10 md:h-full md:w-[73.7vw] lg:w-[78.6vw] lg:gap-6 grid grid-cols-3 lg:grid-cols-2 sr:grid-cols-1 sr:gap-6">
            {currentProduct.goods.map((good, index) => (
              <div
                className="Goods w-[25vw] h-[596px] md:w-[22.83vw]  md:h-[472px] lg:w-[38.23vw] lg:h-[557px] sr:w-[75vw] sr:h-[564px] relative bg-white shadow-custom"
                key={index}
                onClick={() => openModal(good)}
              >
                <img
                  className="GoodPhoto object-cover w-[25.55vw] h-[480px] md:h-[360px] md:w-[22.83vw] lg:w-[38.23vw] lg:h-[480px] sr:w-[75vw] left-0 top-0 absolute"
                  src={good.img}
                />
                <div className=" bottom-0 pl-10 pb-10 lg:pb-6 xg:pl-6 absolute text-neutral-800 text-[20px] md:text-[18px] lg:text-[16px] xg:text-[14px] font-normal font-montserrat leading-9">
                  {good.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
