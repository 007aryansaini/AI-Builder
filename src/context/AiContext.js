import React, { createContext, useState, useEffect, useContext } from "react";
import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [responseState, setResponseState] = useState(null);

  const fetchResponse = async (title, description, limit, part1, purpose) => {
    try {
      const responseGPT = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0,
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `I need content for my website with the title ${title}
                      1. website title ${title}
                      2. website description ${description}
                      3. need data for the following parts
                         1. ${part1} with word limit ${limit}
                      4. purpose for the website ${purpose}
                      generate the response in JSON Format`,
          },
        ],
      });

      const message = responseGPT.choices[0].message;
      setResponseState(message);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  useEffect(() => {
    console.log(responseState);
   
  }, [responseState]);

  return (
    <ResponseContext.Provider value={{ responseState, fetchResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

export default ResponseContext;

export const useTemplate = () => useContext(ResponseContext);