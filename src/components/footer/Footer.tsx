import { HiOutlineExternalLink } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="px-4 pb-1">
      <div className="w-full h-3 border-b-2"></div>
      <div className="p-4 mt-2 space-y-6">
        <a
          className="flex items-center text-lg font-bold text-blue-500 underline gap-x-0.5"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Noobsicoder/ritual-demo-app"
        >
          GitHub Repository link
          <HiOutlineExternalLink className="w-4 h-4 text-blue-500" />
        </a>
        <div className="justify-center text-lg text-blue-500 md:flex opacity-80">
          This webpage is replica of&nbsp;
          <a
            className="flex items-center text-lg font-medium text-blue-500 underline gap-x-0.5"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ritual.com/"
          >
            Ritual
            <HiOutlineExternalLink className="w-4 h-4 text-blue-500" />
          </a>
          &nbsp;and has been recreated by&nbsp;
          <a
            className="flex items-center text-lg font-medium text-blue-500 underline gap-x-0.5"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Noobsiecoder"
          >
            Abhishek Sriram
            <HiOutlineExternalLink className="w-4 h-4 text-blue-500" />
          </a>
        </div>
        <p className="text-sm italic opacity-75">
          **This webpage was built for educational purposes only and not for
          commercial purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
