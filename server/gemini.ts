import { ArticleType, OpeningType } from "@/lib/models";
import { slugify, calculateReadTime } from "@/lib/utils";
import { opening_enums } from "@/drizzle/schema";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "pexels";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const Gemini = () => genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GenerateArticle(): Promise<any> {
  const model = Gemini();
  try {
    const result = await model.generateContent([prompt_article]);
    const response = JSON.parse(result.response.text().replace("```json", "").replace("```", "").trim());
    const pexels_img = await fetchPexelImage(response.img);

    const newArticle: ArticleType = {
      title: response.title,
      slug: slugify(response.title),
      image: pexels_img?.newImg || "",
      alt_text: pexels_img?.newAlt || "",
      category: response.category,
      location: response.location,
      published: new Date(),
      content: response.content,
      read_time: calculateReadTime(JSON.stringify(response.content)),
    }
    return newArticle;
  } catch (error) {
    return null;
  }
}

export async function GenerateOpening(): Promise<any> {
  const model = Gemini();
  try {
    const result = await model.generateContent([prompt_opening]);
    const response = JSON.parse(result.response.text().replace("```json", "").replace("```", "").trim());

    const newOpening: OpeningType = {
      title: response.title,
      department: response.department,
      location: response.location,
      option: response.option,
      timezone: response.timezone,
      published: new Date(),
      description: response.description,
      clearance_required: response.clearance_required,
      is_urgent: response.is_urgent,
      salary_min: response.salary_min,
      salary_max: response.salary_max,
      salary_cur: response.salary_cur,
      salary_frq: response.salary_frq,
    }
    return newOpening as OpeningType;
  } catch (error) {
    return null;
  }
}

async function fetchPexelImage(query: string) {
  try {
    const client = createClient(process.env.PEXELS_API_KEY!);
    const pexelsResponse = await client.photos.search({ query: query, per_page: 1 });

    if ('photos' in pexelsResponse) {
      const newImg = pexelsResponse.photos[0].src.original;
      const newAlt = `${pexelsResponse.photos[0].alt} by ${pexelsResponse.photos[0].photographer}`;

      console.log(newImg);
      console.log(newAlt);

      return { newImg, newAlt };
    } else {
      console.error("Error: Unable to fetch photos. Response:", pexelsResponse);
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

const prompt_article = `Generate a detailed article **in the following format:**

{
  "title": string,
  "category": string,
  "img": string,
  "location": string,
  "content": string[] // each paragraph is a string, the body is the full array
}

Create a detailed article with a descriptive title (8-12 words) related to business, corporate culture, leadership, technology, or innovation. Include a brief suggested image description that is relevant to the topic (1-2 words). Ensure the location is appropriate for the topic, specifying if global, regional, or a specific city. Structure content into 5-7 paragraphs covering key themes like challenges, benefits, and examples. Maintain a formal tone with clear, engaging language. Please respond without backticks or any formatting.`;

const prompt_opening = `Generate a detailed job opening **in the following format:**

{
  "title": string, // job title
  "department": ${opening_enums.departments}, // the department the role belongs to
  "location": string, // city or remote
  "option": ${opening_enums.options}, // type of employment
  "timezone": ${opening_enums.timezones}, // timezone of the role
  "description": text, // detailed job description, including responsibilities and required skills
  "clearance_required": boolean, // if security clearance is required
  "is_urgent": boolean, // if the role is urgent
  "salary_min": decimal, precision: 10, scale: 2, // minimum salary offered "salary_max": decimal, precision: 10, scale: 2, // maximum salary offered
  "salary_cur": ${opening_enums.currencies}, // currency of the salary
  "salary_frq": ${opening_enums.salary_frq}, // salary frequency
}

Create a detailed job opening with a descriptive title (5-8 words) related to technology, leadership, or corporate roles. Include specific location details (city, remote, or global). Specify if security clearance is required and if the position is urgent. Define salary range with appropriate currency and salary type (annual, monthly, etc.). Maintain a professional tone with clear, engaging language.`;
