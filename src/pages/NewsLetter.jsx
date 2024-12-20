import axios from 'axios';
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'; 

export const action = async({request})=>{
  
  
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl,data)
  console.log(response);
  toast.success(response.data.msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   transition: Bounce
    });
  return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
      });
    return error;
  }
  
}


export default function NewsLetter() {
  const navigate = useNavigation();
  console.log(navigate);
  const isSubmitting = navigate.state === "submitting";
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white capitalize">
              our newsletter
              </h1>
              <Form className="space-y-4 md:space-y-6 text-start" method='POST'>
              <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input type="text" name="name" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" defaultValue="john" required=""/>
                  </div>
                  <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" defaultValue="doe" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" defaultValue="test@test.com" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" disabled={isSubmitting}>{isSubmitting?"Submitting":"Send"}</button>
                  
              </Form>
          </div>
      </div>
  </div>
</section>
  )
}
