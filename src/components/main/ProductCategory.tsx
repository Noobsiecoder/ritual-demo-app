import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import MultivitaminImage from "../../assets/img/Category-Multivitamin.jpg";
import ProteinImage from "../../assets/img/Category-Protein__1_.jpg";
import PreganacyImage from "../../assets/img/Category-Pregnancy__1_.jpg";
import BundlesImage from "../../assets/img/Category-Bundles.jpg";

type ImageProps = {
  src: string;
  text: string;
  tagData?: {
    isTagPresent: boolean;
    tagTextValue: string;
  };
};

type TagProps = {
  tagTextValue?: string;
};

const OfferTagComponent = ({ tagTextValue }: TagProps): JSX.Element => (
  <div className="flex">
    <div className="flex items-center justify-center w-12 h-6 bg-gray-50 whitespace-nowrap">
      <span
        style={{ fontSize: "0.6rem" }}
        className="font-bold uppercase font-dm-sans text-blue-750"
      >
        {tagTextValue ?? "Save $10"}
      </span>
    </div>
    <div className="grid">
      <div className="inline-block w-8 overflow-hidden">
        <div className="h-3 origin-bottom-left transform -rotate-45 bg-gray-50"></div>
      </div>
      <div className="inline-block w-8 overflow-hidden">
        <div className="h-3 origin-top-left transform rotate-45 bg-gray-50"></div>
      </div>
    </div>
  </div>
);

const ImageComponent = ({ src, tagData, text }: ImageProps): JSX.Element => (
  <div className="cursor-pointer">
    <div className="relative overflow-hidden aspect-w-9 aspect-h-16 lg:aspect-none">
      <img
        src={src}
        alt="hero-img-mobile"
        className="object-cover object-center h-24 transition duration-300 transform hover:scale-125 w-44 md:h-32 md:w-52 lg:h-36 lg:w-56 xl:h-44 xl:w-64"
      />
      <div
        className={`${
          tagData?.isTagPresent ? "absolute bottom-2 left-2" : "hidden"
        }`}
      >
        <OfferTagComponent tagTextValue={tagData?.tagTextValue} />
      </div>
    </div>
    <div className="flex items-center justify-center w-full h-8 bg-gray-100 md:h-10 xl:h-12">
      <span className="text-sm font-medium lg:text-base text-blue-750 font-dm-sans">
        {text}
      </span>
    </div>
  </div>
);

const ProductCategory = (): JSX.Element => {
  const tagData = {
    proteinTagData: {
      isTagPresent: true,
      tagTextValue: "New",
    },
    bundlesTagData: {
      isTagPresent: true,
      tagTextValue: "Save $10",
    },
  };

  return (
    <OwlCarousel
      className="pl-4 md:pl-0 owl-theme"
      items={5}
      autoWidth={true}
      margin={10}
      nav
    >
      <ImageComponent src={MultivitaminImage} text="Multivitamin" />
      <ImageComponent
        src={ProteinImage}
        text="Protein"
        tagData={tagData.proteinTagData}
      />
      <ImageComponent src={PreganacyImage} text="Pregnancy" />
      <ImageComponent
        src={BundlesImage}
        text="Bundles"
        tagData={tagData.bundlesTagData}
      />
    </OwlCarousel>
  );
};

export default ProductCategory;
