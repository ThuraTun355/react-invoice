import React, { useContext, useRef } from 'react'
import { GeneralContext } from '../context/GeneralContextProvider';

const CreateForm = () => {
  const {products,addNewRecord,records,updateRecord} = useContext(GeneralContext)
  const nameRef= useRef("")
  const quantityRef = useRef("")

  const buyBtnHandler = () => {
    const currentProduct = products.find(product => product.id === parseInt(nameRef.current.value))
    const newRecord ={
      id : Date.now(),
      productId : parseInt(nameRef.current.value),
      name : currentProduct.name,
      price : currentProduct.price,
      quantity : quantityRef.current.valueAsNumber,
      cost : (currentProduct.price * quantityRef.current.valueAsNumber).toFixed(2)
    }
      const existedRow = records.find(record => record.productId === parseInt(nameRef.current.value))
      if(existedRow){
        updateRecord(currentProduct.id,quantityRef.current.valueAsNumber)
      }else{
      addNewRecord(newRecord)
      }
      nameRef.current.value = "aa";
      quantityRef.current.value = ""
  }

  return (
    <div className=" p-3 lg:p-6 bg-[#dde7c7] border border-[#dde7c7] rounded-sm mb-5 lg:mb-7 text-sm font-semibold text-center  print:hidden">
      <div className=" grid grid-cols-2 lg:grid-cols-3 items-center gap-2.5 lg:gap-5">
        <div   className=" col-span-1">
          <select ref={nameRef}  className=' px-3 py-2  bg-[#dde7c7] focus:outline-none border-2 border-neutral-900 w-full'>
          <option value="aa" >Select Product</option>
            {products.map(({id,name}) => <option key={id} value={id}>{name}</option> )}
          </select>
        </div>
        <div className=" col-span-1">
        <input type="number" ref={quantityRef}  placeholder="Quantity" className=" px-3 py-2  bg-[#dde7c7]  text-neutral-900  border-2 border-neutral-900  placeholder:text-neutral-900 placeholder:font-semibold placeholder:text-sm placeholder:text-center w-full focus-visible:outline-none focus:placeholder-transparent" />
        </div>
        <div className=" col-span-2 lg:col-span-1">
        <button  onClick={() => quantityRef.current.valueAsNumber > 0 && buyBtnHandler()} className=" px-3 py-2 bg-neutral-900 border-2 border-neutral-900 text-neutral-50 w-full lg:hover:bg-neutral-800  duration-300 active:scale-90 ">Add Record</button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
