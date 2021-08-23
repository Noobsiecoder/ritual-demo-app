import { HiOutlineUserCircle } from "react-icons/hi";

type LinkProps = {
  text: string;
  isTitle?: boolean;
};

const LinkComponent = ({ text, isTitle }: LinkProps): JSX.Element => (
  <span
    className={`${
      isTitle ? "h-3" : "h-1"
    } cursor-pointer flex items-center hover:bg-yellow-250 w-min`}
  >
    <span
      className={`${
        isTitle ? "font-bold text-3xl" : "text-lg"
      } font-dm-sans text-blue-750 px-2 whitespace-nowrap`}
    >
      {text}
    </span>
  </span>
);

const OfferTagComponent = (): JSX.Element => (
  <div className="flex">
    <div className="flex items-center justify-center w-20 h-8 bg-yellow-250 whitespace-nowrap">
      <span className="text-sm font-medium font-dm-sans text-blue-750">
        Save $10
      </span>
    </div>
    <div className="grid">
      <div className="inline-block overflow-hidden w-11">
        <div className="h-4 origin-bottom-left transform -rotate-45 bg-yellow-250"></div>
      </div>
      <div className="inline-block overflow-hidden w-11">
        <div className="h-4 origin-top-left transform rotate-45 bg-yellow-250"></div>
      </div>
    </div>
  </div>
);

const NavBarLink = (): JSX.Element => {
  return (
    <div className="grid md:justify-center gap-y-20">
      <div className="space-y-9">
        <LinkComponent text="Multivitamin" isTitle={true} />
        <LinkComponent text="Protein" isTitle={true} />
        <LinkComponent text="Pregnancy" isTitle={true} />
        <div className="flex items-center -mt-2 gap-x-2">
          <LinkComponent text="Bundles" isTitle={true} />
          <OfferTagComponent />
        </div>
      </div>
      <div className="space-y-8">
        <LinkComponent text="Who We Are" />
        <LinkComponent text="Ingredients" />
        <LinkComponent text="Our Clinical story" />
        <LinkComponent text="The Journal" />
        <div className="flex items-center pt-4 gap-x-1.5">
          <HiOutlineUserCircle className="w-6 h-6 text-blue-750" />
          <span className="text-lg font-medium font-dm-sans text-blue-750">
            Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBarLink;
