"use client"
import bg from "../../../public/herobg.jpg";
import { Button } from "../ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import item1 from "../../../public/item1.png";
import item2 from "../../../public/item2.png";
import item3 from "../../../public/item3.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const bgImage = {
    backgroundImage: `URL(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
  };
  const carouselItem = [item1, item2, item3];

  return (
    <div style={bgImage} className="">
      <div className=" h-full bg-[#ffffffe7] py-14 md:py-36">
        <div className=" container mx-auto h-full flex flex-col md:flex-row justify-between items-center">
          <div className="mb-14 md:mb-0">
            <h1 className=" text-5xl md:text-6xl xl:text-8xl font-bold text-black mb-6">
              Keep track of
            </h1>
            <h1 className=" text-5xl md:text-6xl xl:text-8xl font-bold text-primary  mb-8">
              Fitness Goal
            </h1>
            <h3 className="text-xl md:text-2xl xl:text-4xl font-bold text-slate-700 mb-8">
              Order on Simply Good Food
            </h3>
            <Button
              variant="secondary"
              className="py-5 md:py-8 text-lg md:text-xl rounded-xl px-5"
              size="lg"
            >
              Explore Menu <FiArrowUpRight className="w-5 md:w-7 h-5 md:h-7 ml-2 " />
            </Button>
          </div>
          {/* image carousel */}
          <div className=" mx-8 md:mx-0 w-auto md:w-[350px] lg:w-[400px] xl:w-[500px]">
            <Carousel plugins={[Autoplay({delay: 2000, number: 60} ),]}>
              <CarouselContent>
                {
                    // eslint-disable-next-line react/jsx-key
                    carouselItem.map((item) => <CarouselItem> <Image className=" mx-auto" src={item} height={450} width={450} alt="img"></Image></CarouselItem>)
                }

              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
