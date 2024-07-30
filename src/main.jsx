import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GeneralContextProvider from './context/GeneralContextProvider'

const rootElement = document.querySelector("#root")
const root = ReactDOM.createRoot(rootElement)
root.render(<GeneralContextProvider><App/></GeneralContextProvider>)