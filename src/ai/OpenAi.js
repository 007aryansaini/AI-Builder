import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey:  "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",
  dangerouslyAllowBrowser: true,
});

export const response = async (title, description, limit, part1,purpose) => {
  const responseGPT = await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: ` i need content for my webiste  with the title ${title}
                  1. website titile ${title}
                  2. website description ${description}
                  3. need data for the following parts
                     1. ${part1} with word limit ${limit}
                  4. purpose for the website ${purpose}
                  generate the response in JSON format`,
      },
      //   {
      //     // role: "user",
      //     // content: code, // send more details here
      //   },
    ],
  });

  return console.log(responseGPT.choices[0].message);
};
