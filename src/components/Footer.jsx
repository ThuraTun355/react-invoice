import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContextProvider'

const Footer = () => {
  const {toggleDrawer} = useContext(GeneralContext)
  const handleInventoryBtn = () => {
    toggleDrawer();
  }
  return (
    <div className=' flex justify-end items-center text-sm font-semibold mt-auto gap-2 lg:gap-4 print:hidden'>
      <button onClick={handleInventoryBtn} className=" border-2 border-neutral-800 px-3 py-2 hover:bg-neutral-800 hover:text-neutral-50 duration-200">
        Manage Inventory
      </button>
        <button onClick={() => print()} className=" border-2 border-neutral-900 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 text-neutral-50 duration-200">Print</button>
    </div>
  )
}

export default Footer