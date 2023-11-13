import { useRef, useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiWallet2Line, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";
import { useDimensions } from "hooks";
import { useCycle, motion } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "components/common/Button";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed select-none px-5 xs:px-8 md:px-10 top-0 left-0 w-full flex items-center justify-between py-4 z-[55000] transition-all duration-300 ${
        isScrolled && "bg-[#0B1327]"
      }`}
    >
      <div className="flex items-center cursor-pointer text-primary">
        {/* <span className="text-3xl">
          <HiOutlineMenuAlt4 />
        </span> */}
        <Link href="/">
          <span className="text-xl text-primary font-bold">PupilSoft</span>
        </Link>
      </div>
      <div className="space-x-20 hidden lg:block">
        <Link
          href={"/what-we-do"}
          className="text-white font-commissioner font-medium"
        >
          What we Do
        </Link>
        <Link
          href={"/projects"}
          className="text-white font-commissioner font-medium"
        >
          Projects
        </Link>
        <Link
          href={"/what-we-do"}
          className="text-white font-commissioner font-medium"
        >
          Teams
        </Link>
      </div>
      <div className="">
        <Button className="py-[9.25px] text-[15px]">Get in Touch</Button>
      </div>
    </div>
  );
};

export default Header;
