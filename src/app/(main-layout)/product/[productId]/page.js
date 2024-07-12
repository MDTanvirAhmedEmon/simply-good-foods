"use client";
import ProductCart from "@/components/Home/utils/ProductCart";
import { Button } from "@/components/ui/button";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "@/redux/api/apiSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";
import { LiaStarSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = ({ params }) => {
  const { data } = useGetSingleProductQuery(params?.productId);

  // all data fetch
  const { data: products } = useGetAllProductsQuery();

  const filteredProducts = products?.data?.filter(
    (product) => product._id !== params?.productId
  );
  // total number of products in cart
  const { products: myProducts } = useSelector((state) => state.cart);

  let total = 0;
  for (const product of myProducts) {
    total = total + product.quantity;
  }

  const dispatch = useDispatch();
  const bgImage = {
    backgroundImage: `URL(${data?.data?.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    minHeight: "300px",
  };

  return (
    <div className="py-10">
      <Link className="z-50" href={`/cart`}>
        <div className="text-white bg-primary rounded-full p-4 cursor-pointer shadow-md fixed right-10 bottom-14">
          <HiShoppingCart className="w-10 h-10 " />
          <div className="bg-[#FDB64E] w-6 h-6 rounded-full text-white absolute top-[-6px] right-[-6px] shadow-2xl flex items-center justify-center">
            {total}
          </div>
        </div>
      </Link>
      <div className="container mx-auto flex flex-col md:flex-row gap-10  md:h-auto">
        <div
          style={bgImage}
          className="w-full md:w-1/2 h-[300px] md:h-[600px] rounded-2xl border-[12px]"
        ></div>
        <div className="w-full md:w-1/2 h-auto md:h-[600px] ">
          <h2 className=" mb-10 text-slate-600 text-4xl font-bold capitalize cursor-pointer">
            {data?.data?.productName}
          </h2>
          <div className=" flex items-center mb-10">
            <LiaStarSolid className="w-7 h-7 text-orange-400" />
            <p className="text-xl">4.5/5</p>
          </div>
          <div className=" flex gap-4 mb-10 text-center">
            <span className=" text-pink-800">Protein 49g </span> /{" "}
            <span className=" text-pink-800">Carbs 23g</span> /{" "}
            <span className=" text-pink-800">Fat 23g</span>
          </div>

          <h2 className=" mb-10 text-slate-500 font-bold text-2xl">
            ${data?.data?.price}
          </h2>
          <p className="text-lg mb-10 text-slate-500">
            Crispy baked panko breaded chicken topped with a savory general tsos
            sauce, served on a bed of brown rice alongside a cup of broccoli.
          </p>
          <Button
            onClick={() => dispatch(addToCart(data?.data))}
            className="rounded-xl w-full py-6 text-lg"
          >
            Add To Cart
          </Button>
        </div>
      </div>
      {/* related products */}
      <div className="container mx-auto">
        <h1 className=" md:mb-4 text-slate-600 font-bold text-2xl md:text-4xl lg:text-5xl mt-20 md:mt-14">
          Related Products
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:mt-16 ">
          {filteredProducts?.map((product) => (
            <ProductCart key={product._id} product={product}></ProductCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
