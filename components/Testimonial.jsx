import React from 'react'
import {man} from "./man.jpg"

const Testimonial = () => {
  return (
    <div className="py-24 bg-white mt-24 mb-24 ">
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-[50vh]">
      
      <div className="text-center">
      
        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          What our <span className="text-indigo-600">Clients say?</span>
        </h3>
        
      </div>
  
      <div className="mt-20">
        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10 gap-10">
          
          <li className="  p-5 pb-10 text-center shadow-lg bg-white">
            <div className="flex flex-col items-center">
              <div className="mt-4">
                <svg  className="mx-auto mb-5 h-7"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 32 32" xmlSpace="preserve">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="mt-2 mb-4 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Mehdi Mohammadi</a>
                <p className="text-gray-500 uppercase text-sm">Web Developer</p>
              </div>
            </div>
          </li>
          <li className="  p-5 pb-10 text-center shadow-lg bg-white">
            <div className="flex flex-col items-center">
              <div className="mt-4">
                <svg height="25px" className="mx-auto mb-5" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 32 32" xmlSpace="preserve">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="mt-2 mb-4 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Abbas Alami</a>
                <p className="text-gray-500 uppercase text-sm">Flutter Developer</p>
              </div>
            </div>
          </li>
          <li className="  p-5 pb-10 text-center shadow-lg bg-white">
            <div className="flex flex-col items-center">
              <div className="mt-4">
                <svg height="25px" className="mx-auto mb-5" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 32 32" xmlSpace="preserve">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="mt-2 mb-4 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Mohammad Jan</a>
                <p className="text-gray-500 uppercase text-sm">Web Designer</p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      
    </div>
  </div>
  
  

  )
}

export default Testimonial