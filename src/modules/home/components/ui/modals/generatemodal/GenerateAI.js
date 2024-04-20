import React, { useState } from "react";
import { useForm } from "../../../../../../context/store";
import { useNavigate } from "react-router-dom";
import bg from "../../../../assets/bg.jpg"
import { FiRefreshCcw } from "react-icons/fi";

export default function GenerateAIModal({ visible, onClose }) {
  const navigate = useNavigate();
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const [formState, setFormState] = useState({
    websiteTitle: "",
    description: "",
    purpose: "",
  });

  const { handleInputChange, template,setTemplate } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(template);
    handleInputChange(event);
    navigate("/generated-page");
    

   console.log(formState)
   
  };
   const handleReset = () => {
    setTemplate({
      websiteTitle: "",
      description: "",
      purpose: "",
    });
  }
  
  if (!visible) return null;

  return (
    <div
      id="container"
      className="fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center   justify-center"
      onClick={handleClose}
    >
      {/* <div className="bg-white w-[70%] h-[200px]">
        <form onSubmit={handleSubmit}>
          <label>
            websiteTitle:
            <input
              type="text"
              name="websiteTitle"
              value={template.websiteTitle}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            description:
            <input
              type="text"
              name="description"
              value={template.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            purpose:
            <input
              type="text"
              name="purpose"
              value={template.purpose}
              onChange={handleInputChange}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div> */}
      <div className="bg-black text-white w-[90%] h-[75vh]">
        <div class="grid sm:grid-cols-12 w-full h-full">
          <div class="sm:flex hidden col-span-4 w-full h-full">
            <img className="w-full h-full object-cover" src={bg} alt="bg" />
          </div>
          <div class="col-span-8 w-full sm:px-[10%] px-[5%]">
            <button onClick={handleClose} class="font-clash ">
              Ok, Close
            </button>
            <div class="font-clash py-[2%] ">
              <h5 className="text-3xl font-semibold">
                Let's create your Website
              </h5>
              <div className="mt-[2%]">
                <label className="text-lg ">Looking for?</label>
                <div class="grid sm:grid-cols-3">
                  <div class="flex h-[44px] px-4 rounded-[6px] items-center gap-3 border border-white w-full">
                    <div class="w-[20px] h-[20px] border rounded-full"></div>
                    <h6>WEBSITE</h6>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex h-[57vh] justify-between flex-col mt-[4%]"
              >
                <div class="flex flex-col">
                  <label>Website Title</label>
                  <input
                    class=" px-4 w-full h-[44px] rounded-[6px] border border-white outline-none bg-transparent"
                    type="text"
                    name="websiteTitle"
                    value={template.websiteTitle}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div class="flex  flex-col">
                  <label>Description</label>
                  <textarea
                    className=" px-4 py-1 w-full h-[100px] bg-transparent rounded-[6px] outline-none border border-white"
                    type="text"
                    name="description"
                    value={template.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div class="flex flex-col">
                  <label>Purpose</label>
                  <textarea
                    className=" px-4 py-1 w-full h-[100px] bg-transparent rounded-[6px] outline-none border border-white"
                    type="text"
                    name="purpose"
                    value={template.purpose}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <input
                  className="bg-white h-[44px] w-full text-black rounded-[6px] font-medium "
                  type="submit"
                  value="Generate my site"
                />
                <div className="flex justify-end">
                  <button
                    className="bg-white flex items-center justify-center gap-3 w-[100px] h-[44px] text-black rounded-[6px] font-medium "
                    type="button"
                    onClick={handleReset}
                  >
                    <FiRefreshCcw />
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
