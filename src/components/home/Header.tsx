import { useRef, useEffect, useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { RiWallet2Line, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import gsap from 'gsap';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const headRef = useRef();

  useEffect(() => {
    // if(menu){
    //     gsap.to(headRef.current, {
    //         top: "100%",
    //         duration: 0.5,
    //         display: 'none'
    //     });
    // }else{
    //     gsap.to(headRef.current, {
    //         top: 0,
    //         duration: 0.5,
    //         display: 'block'
    //     });
    // }

    if (menu) {
      gsap.to(headRef.current, {
        top: 0,
        display: 'block',
        duration: 0.2,
        opacity: 1,
        height: 'auto',
        ease: 'none',
      });
    } else {
      gsap.to(headRef.current, {
        top: '100%',
        display: 'none',
        duration: 0.2,
        opacity: 0,
        height: 0,
        ease: 'none',
      });
    }
  }, [menu]);

  return (
    <div className="fixed select-none px-3 md:px-10 top-0 left-0 w-full flex justify-between py-4 z-[55000]">
      <div
        onClick={() => setMenu(!menu)}
        className="flex items-center cursor-pointer"
      >
        <span className="text-3xl">
          <HiOutlineMenuAlt4 />
        </span>
        <span className="text-xl hidden sm:block">PupilSoft</span>
      </div>
      <div className="flex gap-5">
        <Link
          href={'/quote'}
          className="rounded-full bg-primary hover:bg-primary/90 text-white px-5 py-2 flex items-center shadow"
        >
          <span className="text-lg pr-2">
            <RiWallet2Line />
          </span>
          <span className="text-sm sm:text-base font-sec">Get a Quote</span>
          {/* Added appoint */}
        </Link>
        <Link
          href={'https://calendar.app.google/fF6wyLsvd8zUF4PN6'}
          passHref
          target={'_blank'}
          rel={'noreferrer'}
          className="rounded-full bg-primary hover:bg-primary/90 text-white px-5 py-2 flex items-center shadow"
        >
          <span className="text-lg pr-2">
            <RiWallet2Line />
          </span>
          <span className="text-sm sm:text-base font-sec">Let's talk</span>
        </Link>
      </div>
      <div
        ref={headRef}
        className={`hidden fixed min-h-screen w-full top-full left-0 bg-cover bg-opacity-10 opacity-0 h-0 z-40`}
        style={{ backgroundImage: `url('/bookslide/bookslide1.png')` }}
      >
        <div className="w-full bg-dark/80 z-50 min-h-screen flex  flex-col lg:flex-row justify-between px-3 md:px-10 py-5">
          <div className="">
            <h1 className="flex items-center">
              <span
                onClick={() => setMenu(!menu)}
                className="text-xl md:text-3xl hover:text-red-500 cursor-pointer"
              >
                <AiOutlineClose />
              </span>
              <span className="text-lg md:text-xl font-medium">PupilSoft</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ul className="text-center space-y-2 font-medium text-xl md:text-4xl">
              <li className="">
                <a href="">Token</a>
              </li>
              <li className="">
                <a href="">Litepaper</a>
              </li>
              <li className="">
                <a href="">Audit</a>
              </li>
              <li className="">
                <a href="">Roadmap</a>
              </li>
              <li className="">
                <a href="">Team</a>
              </li>
              <li className="">
                <a href="">Insights</a>
              </li>
            </ul>
            <div className="hidden md:block pt-5 w-20 h-20">
              <img
                src={'/img/scroll-down.gif'}
                alt="Scroll Down"
                className=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="space-x-3 lg:space-x-0 lg:space-y-3 flex lg:block items-center">
              <div className="flex justify-center items-center cursor-pointer w-10 h-10 text-xl bg-primary/20 rounded-full p-2 text-primary">
                <FaTelegramPlane />
              </div>
              <div className="flex justify-center items-center cursor-pointer w-10 h-10 text-xl bg-primary/20 rounded-full p-2 text-primary">
                <RiTwitterFill />
              </div>
              <div className="flex justify-center items-center cursor-pointer w-10 h-10 text-xl bg-primary/20 rounded-full text-primary">
                <RiInstagramLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
