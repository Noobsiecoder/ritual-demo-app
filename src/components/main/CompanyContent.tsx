import CapsuleImage from "../../assets/img/home-feat-dyson.jpg";
import HomeMapImage from "../../assets/img/Home-Map.jpg";

const CapsuleComponent = (): JSX.Element => (
  <div className="relative">
    <div
      style={{ zIndex: -1 }}
      className="absolute transform bg-yellow-300 rounded-full -top-40 lg:-top-20 w-96 h-96 -translate-x-52"
    ></div>
    <div
      style={{ zIndex: -1 }}
      className="absolute hidden transform bg-yellow-300 rounded-full lg:block -top-40 lg:top-0 w-96 h-96 -translate-x-52"
    ></div>
    <div
      style={{ zIndex: -1 }}
      className="absolute hidden transform bg-yellow-300 rounded-full lg:block -top-40 lg:top-40 w-96 h-96 -translate-x-52"
    ></div>
    <div
      style={{ zIndex: -1 }}
      className="absolute hidden transform bg-yellow-300 rounded-full lg:block -top-40 lg:top-80 w-96 h-96 -translate-x-52 lg:w-6/12"
    ></div>
    <div className="grid justify-between gap-y-6 md:gap-y-0 md:items-center md:grid-cols-2 md:gap-x-12">
      <div className="relative aspect-w-9 aspect-h-16 md:aspect-none">
        <img
          src={CapsuleImage}
          alt="CapsuleImage"
          className="object-cover object-center w-full"
        />
      </div>
      <div className="flex flex-col gap-y-4 md:w-8/12">
        <h3 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl font-dm-sans text-blue-750">
          We're not about pseudoscience and half-truths
        </h3>
        <p className="text-sm lg:text-base font-arvo text-blue-750">
          From Omega-3 DHA from microalgae to regeneratively-farmed pea protein,
          our scientists studied diets and genetics to make daily essentials
          based on what we need.
        </p>
        <span className="font-medium border-b-2 cursor-pointer whitespace-nowrap w-min border-blue-750 font-dm-sans text-blue-750 lg:text-xl">
          Who We Are
        </span>
      </div>
    </div>
  </div>
);

const TraceabilityComponent = (): JSX.Element => (
  <div>
    <div className="flex flex-col md:flex-row-reverse gap-y-6 md:gap-y-0 md:items-center md:grid-cols-2 md:gap-x-24">
      <div className="relative aspect-w-9 aspect-h-16 md:aspect-none">
        <img
          src={HomeMapImage}
          alt="CapsuleImage"
          className="object-cover object-center w-full"
        />
      </div>
      <div className="flex flex-col gap-y-4 md:w-5/12">
        <h3 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl font-dm-sans text-blue-750">
          You deserve traceability
        </h3>
        <p className="text-sm lg:text-base font-arvo text-blue-750">
          We share our sources, studies, and suppliers — daily essentials backed
          by the first visible supply chain of its kind.
        </p>
        <span className="font-medium border-b-2 cursor-pointer whitespace-nowrap w-min border-blue-750 font-dm-sans text-blue-750 lg:text-xl">
          Meet Our Ingredients
        </span>
        <span className="font-medium border-b-2 cursor-pointer whitespace-nowrap w-min border-blue-750 font-dm-sans text-blue-750 lg:text-xl">
          Our Clinical Study
        </span>
      </div>
    </div>
  </div>
);

const CompanyContent = (): JSX.Element => (
  <div className="px-6 pt-16 space-y-16 md:space-y-24 lg:space-y-48">
    <CapsuleComponent />
    <TraceabilityComponent />
  </div>
);

export default CompanyContent;
