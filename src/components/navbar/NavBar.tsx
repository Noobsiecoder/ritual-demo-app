import { useDisplayNavgivation } from "../context";

import { BsBag } from "react-icons/bs";
import { HiX } from "react-icons/hi";

import NavBarLink from "./NavBarLink";

const WebAppTitleSvg = (): JSX.Element => (
  <svg
    className="w-12 h-12 md:w-16 md:h-16 md:ml-16"
    enableBackground="new 0 0 352 115.333"
    version="1.1"
    viewBox="0 0 352 115.333"
  >
    <path
      fill="#142B6F"
      d="M83.784,109.63L62.117,77.18c13.142-6.564,20.489-18.159,20.489-32.511	c0-21.472-16.011-37.617-44.441-37.617H5.232V109.63h18.426V82.282h20.054l17.986,27.348H83.784z M40.05,63.422H23.658V25.914H40.05	c13.055,0,23.209,5.842,23.209,18.755C63.26,57.578,53.105,63.422,40.05,63.422 M329.012,7.052h18.422V109.63h-18.422V7.052z M146.311,52.728v34.023c0.293,4.523,2.319,6.639,6.316,6.639c3.992,0,6.968-1.756,9.386-3.688v17.351	c-3.53,2.479-9.519,4.275-16.169,3.881c-4.423-0.264-9.607-2.161-13.243-5.9c-3.146-3.93-4.72-7.829-4.72-14.452V52.728h-9.421	v-16.66h9.421V12.132h18.43v23.936h12.572v16.66H146.311z M237.831,109.615h-16.523l-1.71-8.384	c-3.386,4.416-10.345,9.267-20.496,9.267c-18.24,0-30.638-10.736-30.638-30.301V36.069h18.231v37.983	c0,12.944,5.784,18.535,16.379,18.535c10.589,0,16.523-7.649,16.523-18.535V36.069h18.233V109.615z M319.535,36.158v73.472h-14.747	l-1.712-7.642c-3.085,3.968-11.164,8.522-21.011,8.522c-21.011,0-36.886-15.576-36.886-37.615c0-22.043,15.875-37.62,36.886-37.62	c9.697,0,17.926,4.556,21.011,8.523l1.712-7.641H319.535z M282.628,52.676c-11.188,0-19.813,9.167-19.813,20.22	c0,11.05,8.626,20.215,19.813,20.215c10.918,0,19.275-9.165,19.275-20.215C301.903,61.843,293.546,52.676,282.628,52.676 M91.493,36.066h18.425v73.562H91.493V36.066z M112.609,15.597c0,6.705-5.363,12.14-11.977,12.14	c-6.615,0-11.978-5.435-11.978-12.14c0-6.703,5.362-12.138,11.978-12.138C107.246,3.459,112.609,8.894,112.609,15.597"
    ></path>
  </svg>
);

const MobileSideBar = (): JSX.Element => {
  const { canDisplay, setCanDisplay } = useDisplayNavgivation();

  return (
    <div
      style={canDisplay ? undefined : { transform: "translateX(150%)" }}
      className={`z-20 md:hidden ${
        canDisplay
          ? "transform translate-x-0 transition duration-700"
          : "transform transition duration-700"
      } absolute h-screen w-full py-0.5 px-6 bg-white`}
    >
      <div className="flex items-center justify-between">
        <WebAppTitleSvg />
        <div className="flex items-center gap-3">
          <BsBag className="w-5 h-5 text-blue-750" />
          <button
            onClick={() => setCanDisplay(!canDisplay)}
            className="focus:outline-none "
          >
            <HiX className="w-6 h-6 text-blue-750" />
          </button>
        </div>
      </div>
      <div className="py-6 -mx-2">
        <NavBarLink />
      </div>
    </div>
  );
};

const DeskTopSideBar = (): JSX.Element => {
  const { canDisplay, setCanDisplay } = useDisplayNavgivation();

  return (
    <div
      className={`z-20 hidden md:block ${
        canDisplay
          ? "transform translate-x-0 transition duration-700"
          : "transform -translate-x-full transition duration-700"
      } absolute h-screen w-5/12 lg:w-4/12 py-0.5 px-4 bg-white shadow-2xl`}
    >
      <div className="px-3 py-6">
        <div className="float-right">
          <button
            onClick={() => setCanDisplay(!canDisplay)}
            className="focus:outline-none"
          >
            <HiX className="w-6 h-6 text-blue-750" />
          </button>
        </div>
      </div>
      <div className="py-20">
        <NavBarLink />
      </div>
    </div>
  );
};

const NavBar = (): JSX.Element => {
  const { canDisplay, setCanDisplay } = useDisplayNavgivation();

  return (
    <>
      <MobileSideBar />
      <DeskTopSideBar />
      <div
        className={`z-10 flex sticky top-0 items-center justify-between px-4 bg-white shadow-md lg:px-8 xl:px-24 ${
          canDisplay ? "md:opacity-30" : null
        }`}
      >
        <button
          onClick={() => setCanDisplay(!canDisplay)}
          className="py-3 transition duration-300 border-b-4 border-white md:py-6 focus:outline-none hover:border-yellow-400"
        >
          <span className="font-medium font-dm-sans text-blue-750">Menu</span>
        </button>
        <WebAppTitleSvg />
        <div className="flex items-center gap-6">
          <div className="py-4 transition duration-300 border-b-4 border-white cursor-pointer md:py-6 hover:border-yellow-400">
            <span className="hidden font-medium font-dm-sans text-blue-750 md:block">
              Who We Are
            </span>
          </div>
          <div className="py-4 transition duration-300 border-b-4 border-white cursor-pointer md:py-7 hover:border-yellow-400">
            <BsBag className="text-blue-750" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
