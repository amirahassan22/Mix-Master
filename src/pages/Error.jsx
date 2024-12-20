import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError();
  // console.log(error);
  if(error.status === 404){
    return (
      <section className='flex justify-center items-center'>
        <div className='pt-12'>
        <img src="./undraw_page-not-found_6wni.svg" className='w-96' alt="404 page not found" />
        <p className='text-lg font-medium pb-9 pt-4'>Ooh! we can't seem to find the page you're looking for</p>
        <Link to="/" className='link-btn capitalize'>back to home</Link>
        </div>
        
      </section>
    )
  }
  return(
    <div>
      <h3>
        Something went wrong
      </h3>
    </div>
  )
}
