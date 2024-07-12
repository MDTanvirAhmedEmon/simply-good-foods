"use client"
import DailyMeals from "@/components/Home/DailyMeals";
import FAQ from "@/components/Home/FAQ";
import Feedbacks from "@/components/Home/Feedbacks";
import Hero from "@/components/Home/Hero";
import Menu from "@/components/Home/Menu";
import WhySGF from "@/components/Home/WhySGF";
import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";

const HomePage = () => {
    const { products } = useSelector((state) => state.cart);

    let total = 0;
    for (const product of products) {
      total = total + product.quantity;
    }
  
  return (
    <div>
      <Link className="" href={`/cart`}>
        <div className="text-white bg-primary rounded-full p-4 cursor-pointer shadow-md fixed right-10 bottom-14 z-50">
          <HiShoppingCart className="w-10 h-10 " />
          <div className="bg-[#FDB64E] w-6 h-6 rounded-full text-white absolute top-[-6px] right-[-6px] shadow-2xl flex items-center justify-center">
            {total}
          </div>
        </div>
      </Link>
      <Hero></Hero>
      <WhySGF></WhySGF>
      <Menu></Menu>
      <DailyMeals></DailyMeals>
      <FAQ></FAQ>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default HomePage;
