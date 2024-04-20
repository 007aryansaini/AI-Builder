import { createContext, useContext } from "react";
import { useState } from "react";


const FormContext = createContext({});

const FormProvider = ({ children }) => {

  const [template, setTemplate] = useState({
    websiteTitle: "",
    description: "",
    purpose: "",
  });

  const handleInputChange = (event) => {
    setTemplate({
      ...template,
      [event.target.name]: event.target.value,
    });
  };

  
  return (
    <FormContext.Provider value={{ template, handleInputChange,setTemplate}}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

export const useForm = () => useContext(FormContext);
