import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import './CommentModal.css';
import CommentCard from './CommentCard';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { CiFaceSmile } from 'react-icons/ci';
import './ComentModal.css' ;







const CommentModal = ({ onClose, isOpen,isPostLiked,isSaved,handleSavePost ,handlePostLike}) => {

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
    
          <ModalBody className='modalBody' >
            <div className='flex h-[70vh]'>
              <div className='w-[45%] flex flex-col justify-center'>
                    
                      <img src="https://images.pexels.com/photos/20001482/pexels-photo-20001482/free-photo-of-anh-sang-bi-n-hoang-hon-n-c.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                     
                  
              </div>
              <div className='w-[55%] pl-6'>
                <div className='flex justify-between items-center py-3'>

                  <div className='flex items-center'>
                    <div>

                      <img className='w-9 h-9 rounded-full' src="https://images.pexels.com/photos/19991875/pexels-photo-19991875/free-photo-of-nhi-p-nh-chan-dung.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    </div>
                    <div className='ml-2'>
                      <p>UserName</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className='comment'>
                  {[1,1,1,1,1].map(()=> <CommentCard></CommentCard>)}
                </div>
           
                <div className='flex justify-between items-center w-full py-1 mt-2'>
                <div className='flex items-center space-x-2'>
              {isPostLiked ? <FaHeart className='text-xl hover:opacity-50 cursor-pointer text-red-600'   onClick={handlePostLike}/> : <FaRegHeart className='text-xl hover:opacity-50 cursor-pointer '  onClick={handlePostLike} /> }
             <FaRegComment  className='text-xl hover:opacity-50 cursor-pointer' />
             <GrSend className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                 <div className='cursor-pointer'>
               {isSaved ?  <FaBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost} /> :<FaRegBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost} />  }    
                </div>
             </div>

             <div className='w-full mt-2 py-1 text-xs'>
                <p className='mb-1'>10 liked</p>
               
               <p className=' opacity-60 text-xs'>1day ago</p>
             </div>
            
           <div className='border border-t w-full'>
               <div className='flex w-full items-center px-3'>
                    <CiFaceSmile />
                    <input className='commentInput' type="text" placeholder='Add a comment...'/>
              </div>  
           </div>
            
          

              </div>
            </div>
          </ModalBody>

        </ModalContent>
      </Modal>
    </div>
  )
}


export default CommentModal