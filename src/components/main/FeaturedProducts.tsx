import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import FirstProductImage from "../../assets/img/PDP_EFW_Bottle.jpg";
import SecondProductImage from "../../assets/img/PDP_EPRE_Bottle__1_.jpg";
import ThirdProductImage from "../../assets/img/PDP-EP18-Bag.jpg";
import FourthProductImage from "../../assets/img/PDP_EFM_Bottle.jpg";

import BackgroundFirstProductImage from "../../assets/img/PDP-EFW18-Hand.jpg";
import BackgroundSecondProductImage from "../../assets/img/PDP_EPRE_Hand.jpg";
import BackgroundThirdProductImage from "../../assets/img/PDP-EP18-Model-2.jpg";
import BackgroundFourthProductImage from "../../assets/img/PDP-EFM18-Hand.jpg";

type ProductCardType = {
  essentialText: string;
  description: string;
  firstImage: string;
  secondImage: string;
  title: string;
};

const ProductCardComponent = ({
  essentialText,
  description,
  firstImage,
  secondImage,
  title,
}: ProductCardType): JSX.Element => (
  <div className="flex flex-col gap-y-6">
    <div className="relative aspect-w-9 aspect-h-16 md:aspect-none hover:hidden">
      <img
        src={firstImage}
        alt="CapsuleImage"
        className="object-cover object-center w-full cursor-pointer rounded-2xl"
      />
      <div className="absolute top-0 opacity-0 cursor-pointer hover:opacity-100">
        <img
          src={secondImage}
          alt="CapsuleImage"
          className="object-cover object-center w-full rounded-2xl"
        />
        <div className="absolute bottom-0 w-full p-3 text-center rounded-b-md bg-gray-50 opacity-90">
          <span className="font-medium font-dm-sans text-blue-750">
            Learn More
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-y-1">
      <span className="font-serif text-sm italic font-medium cursor-pointer lg:text-base text-blue-750 opacity-95">
        {essentialText}
      </span>
      <h3 className="font-medium cursor-pointer lg:text-2xl font-dm-sans text-blue-750">
        {title}
      </h3>
      <p className="w-56 text-sm cursor-pointer font-dm-sans text-blue-750 opacity-70">
        {description}
      </p>
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <div className="p-6 space-y-6 xl:space-y-12">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold font-dm-sans text-blue-750">
          Featured Products
        </h2>
        <p className="text-sm font-bold border-b-2 cursor-pointer whitespace-nowrap w-min border-blue-750 font-dm-sans text-blue-750">
          Shop All
        </p>
      </div>
      <div className="flex justify-center xl:hidden">
        <OwlCarousel
          className="owl-theme"
          items={5}
          autoWidth={true}
          margin={10}
          nav
        >
          <ProductCardComponent
            essentialText="Essential for Women"
            description="The clinical-backed multivitamin, reimagined for women 18+."
            firstImage={FirstProductImage}
            secondImage={BackgroundFirstProductImage}
            title="Multivitamin 18+"
          />
          <ProductCardComponent
            essentialText="Essential for Men"
            description="Formulated for men 18-49 to help fill nutrient gaps in their diet."
            firstImage={SecondProductImage}
            secondImage={BackgroundSecondProductImage}
            title="Multivitamin 18+"
          />
          <ProductCardComponent
            essentialText="Essential for Women"
            description="The prenatal multivitamin for thinking, trying, and when it's time."
            firstImage={ThirdProductImage}
            secondImage={BackgroundThirdProductImage}
            title="Prenatal Multivitamin"
          />
          <ProductCardComponent
            essentialText="Essential Protein"
            description="The reimagined plant-based protein for adults 18-49."
            firstImage={FourthProductImage}
            secondImage={BackgroundFourthProductImage}
            title="Daily Shake 18+"
          />
        </OwlCarousel>
      </div>

      <div className="hidden xl:block">
        <div className="flex justify-center gap-x-10">
          <ProductCardComponent
            essentialText="Essential for Women"
            description="The clinical-backed multivitamin, reimagined for women 18+."
            firstImage={FirstProductImage}
            secondImage={BackgroundFirstProductImage}
            title="Multivitamin 18+"
          />
          <ProductCardComponent
            essentialText="Essential for Men"
            description="Formulated for men 18-49 to help fill nutrient gaps in their diet."
            firstImage={SecondProductImage}
            secondImage={BackgroundSecondProductImage}
            title="Multivitamin 18+"
          />
          <ProductCardComponent
            essentialText="Essential for Women"
            description="The prenatal multivitamin for thinking, trying, and when it's time."
            firstImage={ThirdProductImage}
            secondImage={BackgroundThirdProductImage}
            title="Prenatal Multivitamin"
          />
          <ProductCardComponent
            essentialText="Essential Protein"
            description="The reimagined plant-based protein for adults 18-49."
            firstImage={FourthProductImage}
            secondImage={BackgroundFourthProductImage}
            title="Daily Shake 18+"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
