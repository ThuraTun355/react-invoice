import React, { useContext } from 'react'
import { GeneralContext } from "../context/GeneralContextProvider";


const DrawerHeader = () => {
    const {toggleDrawer} = useContext(GeneralContext)
    const closeBtnHandler = () => {
        toggleDrawer();
    }
  return (
    <header className=" flex justify-between items-center mb-5">
    <div className="">
      <h2 className=" font-bold text-2xl lg:text-3xl">Manage Inventory</h2>
      <h6 className=" font-bold text-lg lg:text-xl text-neutral-500">
        Available Items
      </h6>
    </div>
    <button onClick={closeBtnHandler} className=" p-2 border border-neutral-900 hover:bg-neutral-200  duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.0}
        stroke="currentColor"
        className="size-4 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </header>
  )
}

export default DrawerHeader