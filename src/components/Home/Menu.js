"use client"
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
import { useGetAllProductsQuery } from "@/redux/api/apiSlice";

const Menu =  () => {
  const {data, isLoading} = useGetAllProductsQuery();
  if(isLoading) {
    <div className="py-20">
      <div className="container mx-auto">
          <h1 className="text-center py-6 text-2xl text-slate-600">Loading...</h1>
      </div>
    </div>
  }
  return (
    <div id="menu" className="py-20">
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
