// import { AiFillCar } from "react-icons/ai"; 
// import { AiFillApple } from "react-icons/ai"; 
import { createRoot } from 'react-dom/client'
import './assets/tailwind.css'
import Sidebar from "./layouts/Sidebar";

createRoot(document.getElementById('root')).render(
  <div>
    <Sidebar/>
  </div>
)