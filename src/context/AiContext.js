import React, { createContext, useState, useEffect, useContext } from "react";
import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [responseState, setResponseState] = useState(null);

  const fetchResponse = async (title, description, limit, part1) => {
    try {
      const prompt = `
    Generate content for my website with the title ${title} and description ${description}. I'd like to generate more parts of the website .
    Generate title,description and  parts ${part1} with word limit ${limit} for this item in the following parsable JSON object given an example below?  

    {
      "title": "Title of an Idea of that ${title} (short and catchy)",
      "description": "Description of the  ${description} (well described)",
      "data":{
          "body":"Body of the website  (well described)",
          "footer":"footer of the  website (well described)",
          "aboutus":"aboutus section of the  website (well described)",
          "mission":"mission of the  website (well described)",
          "vision":"vision of the  website (well described)",
          "feautures":"feautures of the  website (well described)",
          "tagline":"tagline should be at least and equal to 6 words only (catchy)",
          "benefits":{
            "benefit1":{
            "subtitle":"benefit1 should have a subtitle with two words",
            "title":"benefit1 should have a title with 3 words",
            "paragraph":"Benefit1 of the site (two paragraph sentence and space between the paragraph)",
            },
            "benefit2":{
            "subtitle":"benefit2 should have a subtitle with two words",
            "title":"benefit2 should have a title with 3 words",
            "paragraph":"Benefit2 of the site (two paragraph sentence and space between the paragraph)",
            },
            "benefit3":{
            "subtitle":"benefit3 should have a subtitle with two words",
            "title":"benefit3 should have a title with 3 words",
            "paragraph":"Benefit3 of the site (two paragraph sentence and space between the paragraph)",
            },
          },
          "explore":{
            "title":"explore title should talk about why we should explore this app should be at least and equal to 3 words only (catchy)",
            "paragraph":"explore title should talk about why we should explore this app  should be at least and equal to 12 words only (catchy)"
          }

      }
    }
  `;
      const responseGPT = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0,
        max_tokens: 1000,
        messages: [
          { role: "system", content: "You are a website content generator" },
          { role: "user", content: prompt },
          {
            role: "system",
            content:
              "You are a helpful assistant that corrects grammatical errors in text.",
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
