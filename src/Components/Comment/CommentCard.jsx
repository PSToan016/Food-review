import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CommentCard = () => {
    const[isCommentLiked,setIsCommentLiked]=useState();

    const handCommentLike= () => {
        
        setIsCommentLiked(!isCommentLiked);
        
    }

    
  return (
    <div>
      <div className='flex items-center justify-between py-2'> 
        <div className="flex items-center">
            <div>
                <img  className='w-9 h-9 rounded-full' src="https://images.pexels.com/photos/19961138/pexels-photo-19961138/free-photo-of-th-i-trang-nh-ng-ng-i-dan-ba-l-h-i.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </div>
            <div className='ml-3'>
                <p className='mb-0'>
                <span className='font-semibold'>UserName</span>

                <span className='ml-2'>Nice post</span>
                </p>
                
                <div className='flex items-center space-x-3 text-xs opacity-60 pt-2' >
                    <span>1 min ago</span>
                    <span>99 likes</span>
                </div>
              
            </div>
        </div>
       <div className="mr-8">
       {isCommentLiked ? <FaHeart className='text-sm hover:opacity-50 cursor-pointer text-red-600 '   onClick={handCommentLike}/> : <FaRegHeart className='text-sm hover:opacity-50 cursor-pointer '  onClick={handCommentLike} /> }
        
        </div>  
      </div>
    
    </div>
  )
}

export default CommentCard
