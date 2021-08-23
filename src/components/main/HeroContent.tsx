import DesktopMainImage from "../../assets/img/Home-Hero-Desktop.jpg";
import MobileMainImage from "../../assets/img/Home-Hero-Mobile.jpg";

const HeroContent = (): JSX.Element => (
  <div className="relative">
    <div className="hidden aspect-w-16 md:block aspect-h-9 lg:aspect-none">
      <img
        src={DesktopMainImage}
        alt="hero-img-desktop"
        className="object-cover object-center w-full h-full lg:w-full md:h-10/12 lg:h-11/12"
      />
    </div>
    <div className="md:hidden aspect-w-16 aspect-h-9 lg:aspect-none">
      <img
        src={MobileMainImage}
        alt="hero-img-mobile"
        className="object-cover object-center w-full h-full lg:w-full lg:h-full"
      />
    </div>
    <div className="absolute space-y-1 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <h1 className="ml-20 text-4xl font-bold xl:ml-32 xl:text-7xl md:text-5xl font-dm-sans text-blue-750 whitespace-nowrap">
        The future
      </h1>
      <h1 className="text-4xl font-bold xl:text-7xl md:text-5xl font-dm-sans text-blue-750 whitespace-nowrap">
        of health
      </h1>
      <div className="flex items-center ml-20 xl:ml-32 gap-x-2">
        <span className="w-12 h-1 mt-2 bg-blue-750"></span>
        <h1 className="text-4xl italic xl:text-7xl md:text-5xl text-blue-750 whitespace-nowrap">
          is clear
        </h1>
      </div>
      <div className="pt-4 lg:pt-8 ml-14 md:ml-20 xl:ml-32">
        <button className="px-10 py-2 text-white transition duration-300 rounded-full md:py-3 md:px-12 bg-blue-750 hover:bg-white hover:text-blue-750 focus:outline-none">
          <span className="font-semibold">Shop All</span>
        </button>
      </div>
    </div>
  </div>
);

export default HeroContent;
