import React from "react";

const DrawerProduct = ({product:{name,price}}) => {
  return (
    <div className=" flex justify-between items-center px-4 py-3 lg:px-5  border-2 border-neutral-900 mb-4">
      <p className=" font-bold text-sm lg:text-base text-neutral-900">{name}</p>
      <p className=" font-bold text-sm lg:text-base text-neutral-500">{price} USD</p>
    </div>
  );
};

export default DrawerProduct;
