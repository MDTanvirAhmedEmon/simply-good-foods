import { Button } from "@/components/ui/button";
import Link from "next/link";

import { LiaStarSolid } from "react-icons/lia";

const ProductCart = ({product}) => {

    const { img, productName, price, _id } = product;

    return (
        <div className="w-auto bg-slate-100 rounded-xl p-3">
            <Link href={`/product/${_id}`}><div className="bg-cover bg-center w-[auto] h-[250px] rounded-xl cursor-pointer" style={{ backgroundImage: `url(${img})` }}></div></Link>

            <div className=" flex items-center mt-4">
            <LiaStarSolid className="w-5 h-5 text-orange-400" /><p>4.5/5</p>
            </div>
            <Link href={`/product/${_id}`}><h2 className=" my-3 text-slate-600 text-xl font-bold capitalize cursor-pointer">{productName}</h2></Link>
            <h2 className=" mb-3 text-slate-500 font-bold text-lg">${price}</h2>
            <Button className="rounded-xl w-full py-6 text-lg">Add To Cart</Button>
            <div className=" flex gap-4 mt-3 text-center"><span className=" text-pink-800">Protein 49g </span> / <span className=" text-pink-800">Carbs 23g</span> / <span className=" text-pink-800">Fat 23g</span></div>

        </div>
    );
};

export default ProductCart;