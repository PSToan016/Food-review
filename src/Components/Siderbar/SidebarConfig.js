import { AiFillHome, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { AiFillMessage,AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoIosCompass } from "react-icons/io";
import { RiVideoFill } from "react-icons/ri";


export const mainu=[
    {title: "Home", icon: <AiOutlineHome className="text-2xl mr-5 mb-3" />, activeIcon:<AiFillHome className="text-2xl mr-5 mb-3"></AiFillHome>},
  {
    title:"Search", icon:<AiOutlineSearch className="text-2xl mr-5 mb-3"></AiOutlineSearch> , activeIcon:<FaSearch  className="text-2xl mr-5 mb-3"></FaSearch>
  },
  {
    title:"Explore", icon:<AiOutlineCompass className="text-2xl mr-5 mb-3"></AiOutlineCompass> , activeIcon:<IoIosCompass  className="text-2xl mr-5 mb-3"></IoIosCompass>

  },
  {
  title:"Reels", icon:<RiVideoLine className="text-2xl mr-5 mb-3"></RiVideoLine> , activeIcon:<RiVideoFill className="text-2xl mr-5 mb-3"></RiVideoFill>
 },
 {
    title:"Message", icon:<AiOutlineMessage className="text-2xl mr-5 mb-3"></AiOutlineMessage> , activeIcon:<AiFillMessage className="text-2xl mr-5 mb-3"></AiFillMessage>

 },
 {
    title:"Notification", icon:<AiOutlineHeart className="text-2xl mr-5 mb-3"></AiOutlineHeart> , activeIcon:<AiFillHeart className="text-2xl mr-5 mb-3"></AiFillHeart>

 },
 {
    title:"Create", icon:<AiOutlinePlusCircle className="text-2xl mr-5 mb-3"></AiOutlinePlusCircle> , activeIcon:<AiFillPlusCircle className="text-2xl mr-5 mb-3"></AiFillPlusCircle>

 },
 {
    title:"Profile", icon:<CgProfile className="text-2xl mr-5 mb-3"></CgProfile> , activeIcon:<CgProfile className="text-2xl mr-5 mb-3"></CgProfile>

 }

]