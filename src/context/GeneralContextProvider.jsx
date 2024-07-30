import React, { createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Apple",
      price: 1.8,
    },
    {
      id: 2,
      name: "Orange",
      price: 1.3,
    },
    {
      id: 3,
      name: "Pineapple",
      price: 2.7,
    },
    {
      id: 4,
      name: "Banana",
      price: 0.5,
    },
    {
      id: 5,
      name: "Mango",
      price: 1.5,
    },
  ]);
  const addNewProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);
  const addNewRecord = (newRecord) => {
    setRecord([...records, newRecord]);
  };
  const deleteRecord = (id) => {
    setRecord(records.filter((record) => record.id !== id));
  };

  const updateRecord = (id, quantityAmount) => {
    setRecord(
      records.map((record) => {
        if (record.productId === id) {
          const newQuantity = record.quantity + quantityAmount;
          const newCost = (record.price * newQuantity).toFixed(2);
          return { ...record, quantity: newQuantity, cost: newCost };
        }else{
          return {...record}
        }
      })
    )
  };

  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addNewProduct,
        records,
        addNewRecord,
        deleteRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
