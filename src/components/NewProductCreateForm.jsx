import React, { useContext, useRef } from 'react'
import { GeneralContext } from '../context/GeneralContextProvider'
import toast from 'react-hot-toast'

const NewProductCreateForm = () => {
    const {addNewProduct} = useContext(GeneralContext)
    
    const nameRef = useRef("")
    const priceRef = useRef("")

    const addNewBtnHandler = () => {
        const newProduct = {
            id : Date.now(),
            name : nameRef.current.value,
            price : priceRef.current.valueAsNumber
        }
        addNewProduct(newProduct);
        toast.success("successfully added",{
          position:"top-center"
        })
        nameRef.current.value = "";
        priceRef.current.value = "";
    }
  return (
    <div className=' grid grid-cols-3 gap-3 p-3 border bg-[#dde7c7] border-[#dde7c7 mt-auto'>
        <input type="text" ref={nameRef} placeholder='New Product Name' className=" col-span-3 bg-[#dde7c7] border-2 border-neutral-900 px-4 py-2 focus:placeholder-transparent text-neutral-900 font-bold focus:outline-none placeholder:font-bold placeholder:text-neutral-900" />
        <input type="number" ref={priceRef} placeholder='Price' className=" col-span-2 focus:placeholder-transparent text-neutral-900 font-bold px-3 py-2 bg-[#dde7c7] border-2 border-neutral-900 focus:outline-none placeholder:font-bold placeholder:text-neutral-900" />
        <button onClick={() => nameRef.current.value !== "" && priceRef.current.valueAsNumber > 0 && addNewBtnHandler()} className="border-2 border-neutral-900 col-span-1 p-2 bg-neutral-900 text-neutral-50 active:scale-90 duration-200">Add New</button>
    </div>
  )
}

export default NewProductCreateForm