import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { mainu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {
  const [acitveTab,setAvtiveTab]=useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setAvtiveTab(title)
    if(title==="Profile"){
      navigate("/username")
    }
    else if(title==="Search"){
      navigate("/");
    }

  }
  return (
    <div className='sticky top-0 h-[100vh]'>
        <div className='flex flex-col justify-between h-full px-10'>
           <div>
           <div className='pt-10'>
                <img className='w-28' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="" />
           
            </div>
            <div className='mt-10'>
              {mainu.map((item)=> (
               <div onClick={()=>handleTabClick(item.title)} className=' mt-2 flex items-center mb-3 cursor-pointer text-lg'>  
              {acitveTab === item.title? item.activeIcon:item.icon}
              <p className={`${acitveTab === item.title?"font-bold":"font-italic"}`}>{item.title}</p>
                 
               </div> 
                ))}
              
            </div>

      
           </div>
           <div className='flex items-center cursor-pointer pb-10'>
            <IoReorderThreeOutline />  <p className='ml-5 mb-0 '>More</p>
           
            </div>
          
        
         
          
        </div>
    </div>
  )
}

export default Sidebar