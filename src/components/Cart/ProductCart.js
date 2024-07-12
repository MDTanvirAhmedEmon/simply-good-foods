import { addToCart, removeOne } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useDispatch } from "react-redux";

const ProductCart = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div className=" flex gap-4 items-center"> 
            <Image className=" rounded-full" src={product?.img} height={150} width={150} alt="product" />
            <div>
                <div >
                    <p className=" text-2xl md:text-4xl text-slate-600 font-bold capitalize">{product?.productName}</p>
                    <p className="text-xl font-bold text-slate-500 mt-2">${product?.price}</p>
                </div>
                <div className="flex gap-4 mt-4 items-center">
                    <FaAngleLeft onClick={() => dispatch(removeOne(product))} className="w-7 h-7 cursor-pointer"/> {product?.quantity} <FaAngleRight onClick={() => dispatch(addToCart(product))} className="w-7 h-7 cursor-pointer" />
                    <div>
                    <button onClick={() => dispatch(removeOne(product))} className="bg-red-600 p-1 rounded-full "><HiOutlineX className="w-7 h-7 text-white" /> </button>
                </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCart;