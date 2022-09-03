import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import { borderColor } from "@mui/system";
import animationData from './contact.json'
import Lottie from 'react-lottie'
// import "./styles.css";

function MyForm() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  //const formik = useFormik()
  return (
    <div className="flex w-full h-[70vh] border border-violet-700 items-center justify-center  flex-col ">
            <h1 className="text-center font-bold mt-10 text-3xl ">Contact Us</h1>
      <div className="shadow-lg rounded-2xl h-[80%] w-[70%] p-5 flex-row flex mt-7">
        <div className="flex  w-[40%]  border-slate-500 h-full items-center justify-center">
          <div>
          <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
          </div>
        </div>
        <div className="w-[60%] p-5">
          <Formik
            initialValues={{ name: "", email: "", contact: "", course: "" }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <div className="flex flex-col gap-3">
                {/* <label>Name</label> */}
                <div className=" w-[100%]">
                  <Field
                    name="name"
                    type="text"
                
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder=" Name"
                    
                  />
                </div>
                <div className=" w-[100%]">
                  <Field
                    name="email"
                    type="email"
                
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Email"
                    
                  />
                </div>
                <div className=" w-[100%]">
                  <Field
                    name="contact"
                    type="text"
                
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Contact No."
                    
                  />
                </div>
                <div className=" w-[100%]">
                  <Field
                    name="course"
                    type="text"
                
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Course/Title"
                    
                  />
                </div>
              </div>
              

              <button type="submit" className="flex p-3 bg-violet-500 text-lg text-white font-semibold rounded-md w-[40%] items-center justify-center mt-10 hover:bg-violet-600 ">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
