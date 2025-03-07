import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default async function generateRecipe(ingredients) {
    const ingredientsString = ingredients.join(", ")

    const prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
    Format your response in markdown to make it easier to render to a web page. User: I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text()

}