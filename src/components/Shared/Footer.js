import Image from "next/image";
import logo from "../../../public/logo.jpg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-50">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between py-14 ">
          <div className="mb-8 lg:mb-0 mx-auto lg:mx-0">
            <Image src={logo} width={170} height={170} alt="logo"></Image>
          </div>
          <div className="flex flex-col gap-6 text-xl font-semibold text-slate-500 ">
            <p>Home</p>
            <p>Our menus</p>
            <p>Meal plans</p>
            <p>Catering</p>
          </div>
          <div className="flex flex-col mt-6 lg:mt-0 gap-6 text-xl font-semibold text-slate-500  ">
            <p>How it work</p>
            <p>Testimonials</p>
            <p>FAQ</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-600 mb-6 mt-8 lg:mt-0 ">Subscribe To Our Email Alerts</h2>
            <div className="flex flex-col md:flex-row md:gap-4 mb-8 md:mb-0">
              <Input className=" rounded-xl text-lg mb-6 md:w-80" type="email" placeholder="Enter Your Email" />
              <Button size="lg" className=" rounded-xl text-lg px-8">
                Subscribe
              </Button>
              {/* button for small device */}

            </div>
            <div className="flex gap-8">
              <FaFacebook className="h-10 w-10 text-blue-700" />
              <FaInstagram className="h-10 w-10 text-[#F52B24]" />
              <FaLinkedin className="h-10 w-10 text-blue-800" />
              <FaSquareXTwitter className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-950 flex items-center justify-center h-14 text-white">
        <p className="text-lg">© All rights reserved by Simply Good Foods</p>
      </div>
    </div>
  );
};

export default Footer;
