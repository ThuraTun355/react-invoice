import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContextProvider'
import DrawerProduct from './DrawerProduct'

const DrawerProductGroup = () => {
  const {products} = useContext(GeneralContext)
  return (
    <div className=' flex flex-col '>
       {products.map(product=> <DrawerProduct key={product.id} product={product} />)}
      
    </div>
  )
}

export default DrawerProductGroup