import React, { useContext, useState } from "react";
import { useForm } from "../../../../context/store";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import { FiRefreshCcw } from "react-icons/fi";
import ResponseContext from "../../../../context/AiContext";

import { MultiStepLoader as Loader } from "../../components/ui/loader/index";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Preparing the foundation for your new website...",
  },
  {
    text: "Installing essential components for a smooth user experience...",
  },
  {
    text: "Customizing the layout to match your style preferences...",
  },
  {
    text: "Optimizing images and media for fast loading times...",
  },
  {
    text: "Integrating interactive elements to engage your visitors...",
  },
  {
    text: "Testing compatibility across different devices and browsers...",
  },
  {
    text: "Applying final touches to ensure everything looks perfect...",
  },
  {
    text: "Your website is almost ready! Just a few more moments..",
  },
];

export default function GenerateAI() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { handleInputChange, template, setTemplate } = useForm();
  const { fetchResponse } = useContext(ResponseContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!template.websiteTitle || !template.description || !template.purpose) {
      setLoading(false);
      return;
    }

    await fetchResponse(
      template.websiteTitle,
      template.description,
      100,
      "body,footer,aboutus,mission,vision,feautures,tagline,benefit1,benefit2,benefit3"
    );

    console.log(template);
    handleInputChange(event);
    navigate("/generated-page");
    setLoading(false);
  };
  const handleReset = () => {
    setTemplate({
      websiteTitle: "",
      description: "",
      purpose: "",
    });
  };

  return (
    <div className="flex items-center   justify-center">
      <div className="bg-black text-white w-[90%] pt-[5%] h-[100vh]">
        <div class="grid sm:grid-cols-12 w-full h-full">
          <div class="sm:flex hidden col-span-4 w-full h-full">
            <img className="w-full h-full object-cover" src={bg} alt="bg" />
          </div>
          <div class="col-span-8 w-full sm:px-[10%] px-[5%]">
            <div class="font-clash py-[2%] ">
              <h5 className="text-3xl font-semibold">
                Let's create your Website
              </h5>

              <form
                onSubmit={handleSubmit}
                className="flex h-[75vh] justify-between flex-col mt-[4%]"
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

                <Loader
                  loadingStates={loadingStates}
                  loading={loading}
                  duration={2000}
                />

                {loading && (
                  <button
                    className="fixed top-4 right-4 text-white z-[120]"
                    onClick={() => setLoading(false)}
                  >
                    <IconSquareRoundedX className="h-10 w-10" />
                  </button>
                )}

                <input
                  className="cursor-pointer bg-white h-[44px] w-full text-black rounded-[6px] font-medium "
                  type="submit"
                  value={loading ? "Generating..." : "Generate my site"} // Render different text based on loading state
                  onClick={handleSubmit}
                  disabled={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
