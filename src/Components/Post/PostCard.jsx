import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import './PostCard.css' ;
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

const PostCard = () => {
    const [showDropDown,setShowDropDown]=useState(false);
    const [isPostLiked,setIsPostLiked]=useState(false);
    const [isSaved,setIsSaved]=useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();  


    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }
    const handlePostLike=()=>{
        setIsPostLiked(!isPostLiked);
    }
    const handleClick=()  => {
        setShowDropDown(!showDropDown);
       
    }
     
    const handleOpenCommentModal=()=>{
      onOpen();
    }

  return (
    <div>
         <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-2 px-3'> 
                <div className="flex items-center">
                    <img className='w-12 h-12 rounded-full' src="https://images.pexels.com/photos/19895853/pexels-photo-19895853/free-photo-of-bi-n-n-c-d-i-d-ng-mua-he.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                     <div className='pl-2'>
                     <p className='mb-0 font-semibold text-sm'>UserName</p>
                     <p className='font-thin text-sm'>Location</p>
                     </div>
                </div>

            <div className='dropdown'>
            <BsThreeDots className='dots' onClick={handleClick} />
            <div  className='dropdown-content'>
     { showDropDown && 
      <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer '>Delete</p>
     }
            </div>
            </div>

            </div>
            <div className='w-full'>
                <img className='w-full' src="https://images.pexels.com/photos/19648034/pexels-photo-19648034/free-photo-of-tuy-t-cong-nghi-p-xe-l-a-mua-dong.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
             
             <div className='flex justify-between items-center w-full px-3 py-2'>
                <div className='flex items-center space-x-2'>
              {isPostLiked ? <FaHeart className='text-xl hover:opacity-50 cursor-pointer text-red-600'   onClick={handlePostLike}/> : <FaRegHeart className='text-xl hover:opacity-50 cursor-pointer '  onClick={handlePostLike} /> }
             <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
             <GrSend className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                 <div className='cursor-pointer'>
               {isSaved ?  <FaBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost} /> :<FaRegBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost} />  }    
                </div>
             </div>

             <div className='w-full py-2 px-3'>
                <p className='mb-0'>10 liked</p>
                <p className='opacity-50  cursor-pointer'>view all 10 comments</p>
             </div>
            
           <div className='border border-t w-full'>
               <div className='flex w-full items-center px-3'>
                    <CiFaceSmile />
                    <input className='commentInput' type="text" placeholder='Add a comment...'/>
              </div>  
           </div>
  

         </div>

          <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved}></CommentModal>
    </div>
  )
}

export default PostCard