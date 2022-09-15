import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeaturesOne from '../../components/FeaturesOne'
import MyForm from '../../components/Form'
import Dabba from '../../components/Dabba'
import team from "../team.jpg"
import Footer from '../../components/Footer'

const about = () => {
  return (
    <div>
        <div id='headText' className="flex w-full lg:h-[40vh]  Montserrat ">
            <div className='text-[3.7rem] text-left font-bold lg:w-[60%] mt-auto'>
                <div className='w-[70%]  ml-auto leading-snug  '>
                
                We Build Bridge Between <span className="text-stone-600">Students And Good Grades</span>
                </div>
            </div>
            <div className='w-[50%] mt-auto text-gray-700  leading-snug'>
                <div className='w-[60%] leading-normal text- font-bold text-gray-500 ml-14 text-left mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a reiciendis cupiditate dolorum molestias consectetur officia vitae autem, nisi qui 
                </div>
            </div>
        </div>
        <div className='mt-20 flex items-center justify-center'>
            <div className='w-[80%] rounded-xl overflow-hidden'>

            <Image src={team} height={1000} width={2000}></Image>
            </div>
        </div>
        <div className='w-full h-44  flex items-center justify-center'>
            <div className=' h-[2px] bg-slate-400  w-[70%] rounded-full '></div>
        </div>
        <div id='headText' className="flex w-full lg:h-[40vh]  Montserrat ">
            <div className='text-[3.7rem] text-left font-bold lg:w-[60%] '>
                <div className='w-[70%]  ml-auto leading-snug  '>
                
                Together We <span className="text-stone-600">Are Strong</span>
                </div>
            </div>
            <div className='w-[50%]  text-gray-700  leading-snug'>
                <div className='w-[60%] leading-normal text- font-bold text-gray-500 ml-14 text-left mb-8 '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum, exercitationem alias quo quas deleniti ab impedit expedita illo. Iste nihil, at ea obcaecati sint quas culpa magnam commodi doloremque.
                Quibusdam totam sunt rerum architecto ducimus iste in consequuntur facilis accusantium recusandae minus id at, mollitia atque nam repellat. Commodi, ut aperiam laudantium voluptates omnis exercitationem impedit doloribus assumenda eaque.
                Fuga vel quasi architecto veritatis quaerat aliquid magnam laudantium tempora assumenda suscipit, deserunt minima. Beatae corrupti exercitationem velit ex asperiores harum dicta dolores esse dolor debitis neque iste, quod impedit? Sed ut perspiciatis 
                </div>
            </div>
        </div>
        <div className='mt-20'>

        <Dabba></Dabba>
        </div>
        <div id='headText' className="flex w-full lg:h-[40vh]  Montserrat mt-36 ">
            <div className='text-[3.7rem] text-left font-bold lg:w-[60%] '>
                <div className='w-[70%]  ml-auto leading-snug  '>
                
                Our <span className="text-stone-600">Moto</span>
                </div>
            </div>
            <div className='w-[50%]  text-gray-700  leading-snug'>
                <div className='w-[60%] leading-normal text- font-bold text-gray-500 ml-14 text-left mb-8 mt-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum, exercitationem alias quo quas deleniti ab impedit expedita illo. Iste nihil, at ea obcaecati sint quas culpa magnam commodi doloremque.
                Quibusdam totam sunt rerum architecto ducimus iste in consequuntur facilis accusantium recusandae minus id at, mollitia atque nam repellat. Commodi, ut aperiam laudantium voluptates omnis exercitationem impedit doloribus assumenda eaque.
                Fuga vel quasi architecto veritatis quaerat aliquid magnam laudantium tempora assumenda suscipit, deserunt minima. Beatae corrupti exercitationem velit ex asperiores harum dicta dolores esse dolor debitis neque iste, quod impedit? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center lg:mt-[400px] ' >
            <div className='w-[70%] grid gap-10 grid-cols-3 grid-rows-1 '>

                <div className='flex flex-col gap-5 shadow-xl p-5'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum</p>
                    <h className="text-7xl font-bold text-yellow-700 ">20 K+</h>
                    </div>
                <div className='flex flex-col gap-5 shadow-xl p-5'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum</p>
                    <h className="text-7xl font-bold text-rose-700 ">199 +</h>
                    </div>
                <div className='flex flex-col gap-5 shadow-xl p-5'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum</p>
                    <h className="text-7xl font-bold text-sky-700">196 K+</h>
                    </div>

                
               
             
            </div>
        </div>
        <div className='w-full h-44  flex items-center justify-center'>
            <div className=' h-[2px] bg-slate-400  w-[70%] rounded-full '></div>
        </div>
        <FeaturesOne></FeaturesOne>
        <MyForm></MyForm>
        <div id='headText' className="flex w-full lg:h-[40vh]  Montserrat mt-44 ">
            <div className='text-[3.7rem] text-left font-bold lg:w-[60%] '>
                <div className='w-[70%]  ml-auto leading-snug  '>
                
                Join Our <span className="text-stone-600">Team</span>
                </div>
            </div>
            <div className='w-[50%]  text-gray-700  leading-snug'>
                <div className='w-[60%] leading-normal text- font-bold text-gray-500 ml-14 text-left mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a reiciendis cupiditate dolorum molestias consectetur officia vitae autem, nisi qui
                <div className=' underline mt-4 text-violet-400 '><Link href={"#"}>See Open Positions</Link></div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default about