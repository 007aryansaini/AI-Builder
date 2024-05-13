import React from 'react'
import loader from "../../../assets/loader1.gif"

export default function Loader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'><img src={loader} alt="loader"/></div>
  )
}
