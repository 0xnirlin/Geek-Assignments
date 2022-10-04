import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import { borderColor } from "@mui/system";
import animationData from "./contact.json";
import Lottie from "react-lottie";
import { useRouter } from "next/router";
import * as Yup from 'yup'
// import "./styles.css";

function MyForm() {
  const router = useRouter();
  console.log(router.asPath);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //const formik = useFormik()
  return (
    <div
      className={`flex w-full h-[100vh]  items-center justify-center  flex-col ${
        router.asPath == "/"  ? "bg-white" : "bg-sky-500"
      }   `}
      style={{ "clip-path": " polygon(0 10%, 100% 0, 100% 90%, 0% 100%)" }}
    >
      <h1
        className={`text-center font-bold mt-10 text-5xl ${
          router.asPath == "/" ? "text-gray-700" : "text-white"
        }  `}
      >
        Contact Us
      </h1>
      <div className="shadow-lg rounded-2xl h-[60%] w-[70%] p-5 flex-row flex mt-7 bg-white">
        <div className="flex  w-[40%]  border-slate-500 h-full items-center justify-center">
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
        <div className="w-[60%] p-5">
          <Formik
            initialValues={{ name: "", email: "", contact: "", course: "" }}
            onSubmit={async (values,actions) => {
              actions.resetForm({values:initialValues})

              let request = await fetch("http://localhost:3000/api/mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: values.name,
                  email: values.email,
                  contact: values.contact,
                  course: values.course,
                }),
              });
              let response = await request.json();
              
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
                <div className=" w-[99%]">
                  <Field
                    name="course"
                    type="text"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Course/Title"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex p-3 bg-violet-500 text-lg text-white font-semibold rounded-md w-[40%] items-center justify-center mt-10 hover:bg-violet-600 "
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
