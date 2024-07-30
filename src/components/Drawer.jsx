import React, { useContext } from "react";
import DrawerHeader from "./DrawerHeader";
import DrawerProductGroup from "./DrawerProductGroup";
import { GeneralContext } from "../context/GeneralContextProvider";
import NewProductCreateForm from "./NewProductCreateForm";

const Drawer = () => {
  const {openDrawer} = useContext(GeneralContext)
  return (
    <div className={`w-full lg:w-[420px] h-screen  flex flex-col pt-5 pb-3  px-4 bg-neutral-50 fixed z-10 top-0 right-0 duration-500 transform ${!openDrawer && 'translate-x-full'} overflow-scroll `}>
     <DrawerHeader/>
     <DrawerProductGroup/>
     <NewProductCreateForm/>
    </div>
  );
};

export default Drawer;
