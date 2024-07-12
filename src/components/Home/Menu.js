import React from "react";
import SectionTitle from "./utils/SectionTitle";
import ProductCart from "./utils/ProductCart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Menu = async () => {
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <SectionTitle>New & Trending menu</SectionTitle>

        <div className="mx-4 md:mx-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full  mt-16"
          >
            <CarouselContent>
              {data?.data?.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <ProductCart
                    key={product._id}
                    product={product}
                  ></ProductCart>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Menu;
