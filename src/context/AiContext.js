import React, { createContext, useState, useEffect, useContext } from "react";
import OpenAI from "openai";
import { Route, useNavigate } from "react-router-dom";

const openAi = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [responseState, setResponseState] = useState(null);

  const fetchResponse = async (title, description, limit, part1, purpose) => {
    try {
      const prompt = `
Generate content for my website with the title ${title} and description ${description} and the ${purpose}. I'd like to generate more parts of the website .
Generate title,description and  parts ${part1} with word limit ${limit} for this item in the following parsable JSON object given an example below?  

{
  "title": "Title of an Idea of that ${title} (short and catchy)",
  
  "data":{
      "body":"Body of the website  (well described)",
      "footer":"footer of the  website (well described)",
      "aboutus":"aboutus section of the  website (well described)",
      "mission":"mission of the  website (well described)",
      "vision":"vision of the  website (well described)",
      "feautures":"feautures of the  website (well described)",
      "tagline":"tagline should be at least and equal to 6 words only (catchy)",
      "descriptions": "Description of the  ${description} (well described)",
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
      {"brand_paragraph":"a paragraph text that talks about brands that trusts(15 words only)"},
       "brands":[
                                                                                                  
        {"title":"a brand that trusts the website"},
        {"title":"a brand that trusts the website"},
        {"title":"a brand that trusts the website"},
        {"title":"a brand that trusts the website"},
        {"title":"a brand that trusts the website"}
      ],
    "testimonial":[
    {"title":"short testimonial review(12 words only)",
     "subtitle":"short testimonial subtitle header(2 words only)"
    },
    {"title":"short testimonial review(12 words only)",
     "subtitle":"short testimonial subtitle header(2 words only)"
    }
],

      "explore":{
        "title":"explore title should talk about why we should explore this app should be at least and equal to 3 words only (catchy)",
        "paragraph":"explore title should talk about why we should explore this app  should be at least and equal to 12 words only (catchy)"
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
