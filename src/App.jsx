import React from 'react'
import Heading from './components/Heading'
import CreateForm from './components/CreateForm'
import RecordTable from './components/RecordTable'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Heading/> 
      <CreateForm/>
      <RecordTable/>
      <Footer/>
      <Drawer/>
      <Toaster
        position="bottom-right"
        reverseOrder={false}/>
    </>
  )
}

export default App