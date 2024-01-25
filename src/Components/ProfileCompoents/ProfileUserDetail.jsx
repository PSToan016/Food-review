import React from 'react'
import { TbCircleDashed } from "react-icons/tb";
const ProfileUserDetail = () => {
  return (
    <div className='py-10 w-full'> 
        <div className='flex items-center'>
             <div className='w-[15%]'>
                   <img className='w-32 h-32 rounded-full' src="https://images.pexels.com/photos/19850845/pexels-photo-19850845/free-photo-of-thanh-ph-d-ng-giao-thong-d-ng-ph.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
             </div>
             <div className="space-y-5">
                <div className="flex space-x-10 items-center">
                    <p className='mb-0'>Username</p>
                    <button>Edit Profile</button>
                    <TbCircleDashed />
                </div>
                <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>post</span>

                    </div>
                    <div>
                        <span className='font-semibold mr-2' >5</span>
                        <span>follower</span>

                    </div>
                    <div>
                        <span className='font-semibold mr-2' >15</span>
                        <span>following</span>

                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Full name</p>
                    <p className='font-thin text-sm'>🍂🍃Falling for you 🍂🍃
                        ☕Stressed, blessed, and coffee obsessed ☕
                      
                        🌟Sending my selfies to NASA because I’m a star 🌟
                       on’t graduate 🎓</p>
                </div>
             </div>   
        </div>
    </div>

    
  )
}

export default ProfileUserDetail