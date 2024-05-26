import React, { createContext, useState, useEffect, useContext } from "react";
import OpenAI from "openai";
import { useNavigate } from "react-router-dom";
import { useAi } from "./Generated";

const openAi = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const { selectedTemplate } = useAi(); // Add default value {}
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [responseState, setResponseState] = useState(null);
  const [id, setId] = useState(null);

  const fetchResponse = async (title, description, limit, part1, purpose) => {
    try {
      const prompt = `
        Generate content for my website with the title ${title} and description ${description} and the ${purpose}. I'd like to generate more parts of the website.
        Generate title, description, and parts ${part1} with word limit ${limit} for this item in the following parsable JSON object given an example below:   
        {
          "title": "Title the website ",
          "data":{
              "footer":"generate a footer for the website (well described)",
              "aboutus":"generate aboutus section for the website (well described)",
              "mission":"generate mission for the website (well described)",
              "vision":"generate vision for the website (well described)",
              "feautures":"feautures of the website (well described)",
              "tagline":"tagline should be at least and equal to 6 words only (catchy)",
              "descriptions": "Description of the ${description} (well described)",
              "benefits":[
                {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                  {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                  {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
                  {
                  "subtitle":"benefit should have a subtitle with two words",
                  "title":"benefit should have a title with 3 words",
                  "paragraph":"Benefit of the site (one paragraph sentence and space between the paragraph)"
                },
              ],
               "faq":[
                {
                  "question":"faq should be a question asked",
                  "answer":"Answers to the question asked (one paragraph sentence and space between the paragraph)"
                },
                {
                  "question":"faq should be a question asked",
                  "answer":"Answers to the question asked (one paragraph sentence and space between the paragraph)"
                },
                {
                  "question":"faq should be a question asked",
                  "answer":"Answers to the question asked (one paragraph sentence and space between the paragraph)"
                },
                {
                  "question":"faq should be a question asked",
                  "answer":"Answers to the question asked (one paragraph sentence and space between the paragraph)"
                },
                {
                  "question":"faq should be a question asked",
                  "answer":"Answers to the question asked (one paragraph sentence and space between the paragraph)"
                },
                {
                  "question":"faq should be a question asked",
                  "answer":"Answers to the question asked (one paragraph sentence and space between the paragraph)"
                }
              ],
              "navLinks":[
                {"title":""},
                {"title":""},
                {"title":""},
                {"title":""},
                {"title":""}
              ],
              "brand_paragraph":"a paragraph text that talks about brands that trusts (15 words only)",
               "brands":[
                {"title":"a brand that trusts the website"},
                {"title":"a brand that trusts the website"},
                {"title":"a brand that trusts the website"},
                {"title":"a brand that trusts the website"},
                {"title":"a brand that trusts the website"}
              ],
              "testimonial":[
                {"title":"short testimonial review (12 words only)",
                 "subtitle":"short testimonial subtitle header (2 words only)"
                },
                {"title":"short testimonial review (12 words only)",
                 "subtitle":"short testimonial subtitle header (2 words only)"
                }
              ],
              "explore":{
                "title":"explore title should talk about why we should explore this app should be at least and equal to 3 words only (catchy)",
                "paragraph":"explore title should talk about why we should explore this app should be at least and equal to 12 words only (catchy)"
              },
              "short_desc":"short description should be a short description talking about the website"
          }
        }
        don't add any key to any of the response just provide just response
        don't change the title provided from the input use the title in generating the rest content
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

      const message = responseGPT.choices[0].message.content;
      console.log("message:", message);
      const parsedMessage = JSON.parse(message);
      setResponseState(parsedMessage);

      console.log(selectedTemplate);

      await postResponseToAPI(parsedMessage);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const postResponseToAPI = async (data) => {
    try {
      const dataToSend = {
        ...data,
        savedIndex: selectedTemplate,
      };

      const response = await fetch(
        "http://localhost:8000/api/v1/data/promptData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post data to the API");
      }

      const result = await response.json();
      console.log(result.data._id);
      setId(result.data._id);
      console.log(result.data._id);
    } catch (error) {
      console.error("Error posting response to API:", error);
    }
  };

  return (
    <ResponseContext.Provider value={{ responseState, fetchResponse, id }}>
      {children}
    </ResponseContext.Provider>
  );
};

export default ResponseContext;

export const useTemplate = () => useContext(ResponseContext);
