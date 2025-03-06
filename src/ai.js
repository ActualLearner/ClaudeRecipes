// import { HfInference } from "@huggingface/inference";

// const client = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
// export default async function generateRecipe(ingredients) {
//     let out = "";
//     const ingredientsString = ingredients.join(", ")

//     const stream = client.chatCompletionStream({
//         model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//         messages: [
//             { role: "system", content: SYSTEM_PROMPT },
//             { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//         ],
//         provider: "together",
//         max_tokens: 1024,
//     });

//     for await (const chunk of stream) {
//         if (chunk.choices && chunk.choices.length > 0) {
//             const newContent = chunk.choices[0].delta.content;
//             out += newContent;
//             console.log(newContent);
//         }
//     }

//     return out;

// }

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMENI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default async function generateRecipe(ingredients) {
    const ingredientsString = ingredients.join(", ")

    const prompt = `${SYSTEM_PROMPT} I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text()
    
}