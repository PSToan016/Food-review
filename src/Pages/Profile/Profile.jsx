import React from 'react'
import ProfileUserDetail from '../../Components/ProfileCompoents/ProfileUserDetail'
import ReqUserPostPart from '../../Components/ProfileCompoents/ReqUserPostPart'

const Profile = () => {
  return (
        <div className='px-20'>
             <div className=''>
             <ProfileUserDetail></ProfileUserDetail>
             </div>
             <div>
                <ReqUserPostPart></ReqUserPostPart>
             </div>
        </div>
   
  )
}

export default Profile