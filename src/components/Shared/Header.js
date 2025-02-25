"use client";
import Image from "next/image";
import logo from "../../../public/logo.jpg";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMiniPower } from "react-icons/hi2";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  // scrolling smooth
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const{data:session} = useSession()
  console.log(session?.user);

  return (
    <div className="">
      <div className=" h-16 bg-[#FDB64E] flex items-center justify-center">
        <h3 className=" text-white text-md md:text-xl font-semibold ">
          %% Free shipping on all orders %%
        </h3>
      </div>
      <div className=" bg-white shadow-lg z-50 sticky ">
        <div className=" container mx-auto flex items-center justify-between py-4 ">
          <div>
            <Link href={"/"}>
              <Image
                className=" hidden lg:block cursor-pointer"
                src={logo}
                height={80}
                width={80}
                alt="logo"
              ></Image>
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className=" flex gap-4 lg:text-md xl:text-xl font-semibold text-slate-500 items-center">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <span className=" text-slate-300">|</span>
              <li>
                <Link onClick={(e) => handleScroll(e, '#menu')} href={"#menu"}>Our menus</Link>
              </li>
              <span className=" text-slate-300">|</span>
              <li>
                <Link onClick={(e) => handleScroll(e, '#daily')} href={"/#daily"}>Meal plans</Link>
              </li>
              <span className=" text-slate-300">|</span>
              <li>
                <Link onClick={(e) => handleScroll(e, '#why')} href={"/#why"}>Catering</Link>
              </li>
              <span className=" text-slate-300">|</span>
              <li>
                <Link onClick={(e) => handleScroll(e, '#faq')} href={"/#faq"}>How it work</Link>
              </li>
              <span className=" text-slate-300">|</span>
              <li>
                <Link onClick={(e) => handleScroll(e, '#feedback')} href={"/#feedback"}>Testimonials</Link>
              </li>
              <span className=" text-slate-300">|</span>
              <li>
                <Link onClick={(e) => handleScroll(e, '#faq')} href={"/#faq"}>FAQ</Link>
              </li>
            </ul>
          </nav>
          {/* button for large device */}
          {!session?.user ? (
            <>
              <div className="hidden xl:block">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl mr-4 px-8"
                >
                  <Link href={"/login"}>Log In</Link>
                </Button>
                <Button size="lg" className=" rounded-xl text-lg">
                  <Link href={"/signup"}>Sign Up</Link>
                </Button>
              </div>
              {/* button for medium device */}
              <div className="hidden lg:block xl:hidden">
                <Button
                  variant="outline"
                  size="default"
                  className="rounded-xl mr-4 px-8"
                >
                  <Link href={"/login"}>Log In</Link>
                </Button>
                <Button size="default" className=" rounded-xl text-lg">
                  <Link href={"/signup"}>Sign Up</Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="hidden xl:block">
                <Button
                  onClick={() => {
                    signOut();
                  }}
                  variant="outline"
                  size="lg"
                  className=" border-red-600 hover:bg-red-600 hover:text-white border-2 rounded-xl text-red-600 font-semibold text-lg "
                >
                  Log Out
                </Button>
              </div>
              {/* button for medium device */}
              <div className="hidden lg:block xl:hidden">
                <Button
                  onClick={() => {
                    signOut();
                  }}
                  variant="outline"
                  size="default"
                  className=" border-red-600 hover:bg-red-600 hover:text-white border-2 rounded-xl text-red-600 font-semibold text-lg "
                >
                  Log Out
                </Button>
              </div>
            </>
          )}

          {/*========= mobile nav =========*/}
          <div className=" flex justify-between w-full items-center lg:hidden">
            <div>
              <Link href={"/"}>
                <Image
                  className=" "
                  src={logo}
                  height={50}
                  width={50}
                  alt="logo"
                ></Image>
              </Link>
            </div>

            <div>
              <HiMiniBars3 className="h-7 w-7" onClick={() => setMenu(!menu)} />
            </div>
            <div
              className={` bg-white absolute top-0 right-0 left-0 py-8 shadow-md pb-14 lg:hidden ${
                menu ? "block" : "hidden"
              }`}
            >
              <div className=" flex justify-end mr-8 p-4">
                {" "}
                <HiMiniPower
                  className="h-7 w-7"
                  onClick={() => setMenu(!menu)}
                />
              </div>
              <nav className="lg:hidden">
                <ul className=" flex flex-col gap-4 text-xl font-semibold text-slate-500 items-center">
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"/"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"#menu"}>
                      Our menus
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"/#daily"}>
                      Meal plans
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"/#why"}>
                      Catering
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"/#faq"}>
                      How it work
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"/#feedback"}>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenu(!menu)} href={"/#faq"}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
              {!session?.user ? (
                <>
                  <div className=" text-center mt-7">
                    <Button
                      onClick={() => setMenu(!menu)}
                      variant="outline"
                      size="default"
                      className="rounded-xl mr-4 px-8"
                    >
                      <Link href={"/login"}>Log In</Link>
                    </Button>
                    <Button
                      onClick={() => setMenu(!menu)}
                      size="default"
                      className=" rounded-xl text-lg"
                    >
                      <Link href={"/signup"}>Sign Up</Link>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center mt-7">
                  <Button
                    onClick={() => {
                      signOut();
                    }}
                    variant="outline"
                    size="default"
                    className=" border-red-600 hover:bg-red-600 hover:text-white border-2 rounded-xl text-red-600 font-semibold text-lg px-8"
                  >
                    Log Out
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
