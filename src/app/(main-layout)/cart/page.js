"use client"
import ProductCart from "@/components/Cart/ProductCart";
import { Button } from "@/components/ui/button";
import { makeEmpty } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const { products, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    if(products.length === 0) {
        return (
            <div className=" py-20">
                <h1 className="text-center text-2xl md:text-5xl text-slate-600 font-bold">Cart Is Empty</h1>
            </div>
        )
    }
    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        products.map(product => <ProductCart key={product._id} product={product}></ProductCart>)
                    }
                </div>
                <div className="mt-10 text-3xl md:text-4xl font-bold text-slate-600">
                    Total Price : ${total}
                </div>
                <Link href={'/thank-you'}><Button onClick={() => dispatch(makeEmpty())} className="px-10 text-lg rounded-xl mt-6"> Buy Now</Button></Link>
            </div>
        </div>
    );
};

export default Cart;