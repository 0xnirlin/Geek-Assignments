import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { CgLivePhoto } from "react-icons/cg";
import { RiPriceTag2Fill ,RiTaskFill} from "react-icons/ri";
import { MdOutlinePriceChange,MdQuiz } from "react-icons/md";
import { GiBookshelf ,GiDistressSignal} from "react-icons/gi";

const Services = () => {
    let arr = [
        {
          heading: "Online Classes",
          text: "Our expert tutors work tirelessly on your behalf to ensure you do not have to worry about class timings, attendance or grades.",
          icon: <AiFillStar   ></AiFillStar>,
        },
    
        {
          heading: "Online Tests",
          text: "Cannot focus or prepare for the upcoming test? Our skilled mentors are primed and ready to assist you ace your online tests  to help you get that perfect score.",
          icon: <MdOutlinePriceChange   ></MdOutlinePriceChange>,
        },
    
        {
          heading: "Online Quizzes",
          text: "Cannot focus or prepare for the upcoming quiz? Our skilled mentors are primed and ready to assist you ace your online  quizzes to help you get that perfect score.",
          icon: <MdQuiz/   >,
    
        },
        {
          heading: "Online Courses",
          text: "Want to add show another skill or knowledge set but don’t have the time? Our team of professionals will assist you with online course, lectures, assignments, and projects.",
          icon: <GiBookshelf   />,
    
        },
        {
          heading: "Online Exams",
          text: "Exams are always a nightmare, but our team has the expertise in easing your worries by helping you ace your next online university exam to get you the grades you want.",
          icon: <GiDistressSignal/>,
    
        },
        {
          heading: "Assignments",
          text: "Exams are always a nightmare, but our team has the expertise in easing your worries by helping you ace your next online university exam to get you the grades you want.",
          icon: <RiTaskFill/>,
    
        },
        {
          heading: "360 Live Support",
          text: "Exams are always a nightmare, but our team has the expertise in easing your worries by helping you ace your next online university exam to get you the grades you want.",
          icon: <CgLivePhoto/>,
    
        },
        {
          heading: "Instant Reviews",
          text: "Exams are always a nightmare, but our team has the expertise in easing your worries by helping you ace your next online university exam to get you the grades you want.",
          icon: <VscOpenPreview/>,
    
        },
      ];
  return (
    <div className='h-screen  items-center justify-center grid grid-cols-4 grid-rows-2  gap-1 p-20 '>
        {arr.map((item) =>
        (
            <div className='flex border-2 hover:border-violet-700 min-h-[80%] p-5 mt-auto mb-auto w-[90%] shadow-lg  rounded-xl transition-all duration-500 flex-col'>
                <div id='icon' className='w-[20%] h-fit p-4  border-slate-400 rounded-xl bg-violet-200 ml-auto mr-auto mt-5 flex items-center justify-center '>
                    {item.icon}
                </div>
                <div id='heading' className='flex font-bold text-xl mt-5 items-center justify-center '>{item.heading}</div>
                <div id='text' className='flex text-xs font-medium text-gray-600 mt-2 '>{item.text}</div>
            </div>
        )) }
        
    </div>
  )
}

export default Services