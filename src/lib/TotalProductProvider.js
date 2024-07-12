"use client"

import { useSelector } from "react-redux";

const TotalProductProvider = ({children}) => {
    const { products } = useSelector((state) => state.cart);

    let total = 0;
    for (const product of products) {
      total = total + product.quantity;
    }

    return (
        <div total={total}>
        </div>
    );
};

export default TotalProductProvider;