import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const response = async (title, description, limit, part1) => {
  const prompt = `
    Generate content for my website with the title ${title} and description ${description}. I'd like to generate more parts of the website .
    Generate parts ${part1} with word limit ${limit}  

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

      }
    }
  `;
  const responseGPT = await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    max_tokens: 1000,

    messages: [
      { role: "system", content: "You are an idea generator." },
      { role: "user", content: prompt },
      {
        role: "system",
        content:
          "You will brainstrom and generate the idea that the user wants.",
      },
      
    ],
  });

  return console.log(responseGPT.choices[0].message);
};
