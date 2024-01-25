import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css";
const ReqUserPostCard = () => {
  return (
    <div className="p-2">
         <div className="post w-60 h-60"> 
            <img className='cursor-pointer' src="https://images.pexels.com/photos/1483580/pexels-photo-1483580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className="overplay">
                <div className="overplay-text flex justify-between">
                    <div >
                    <AiFillHeart /> <span>10</span>
                    </div>
                    <div>
                    <FaComment /> <span>30</span>
                    </div>
                </div>
            </div>

        
         </div>
       
    </div>
  )
}

export default ReqUserPostCard