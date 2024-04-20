import React from 'react'
import { useForm } from '../../context/store';


export default function Quickswap() {
      const { template } = useForm();
  return (
    <div className="flex h-screen w-full bg-blue-500  justify-center items-center">
      <h2>This is the first website template with title </h2>
      <h4>Title: {template?.websiteTitle}</h4>
      <h5>{template?.description}</h5>
    </div>
  );
}
