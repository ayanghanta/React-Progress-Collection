import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";

import { API_KEY } from "../../config";

export default function useGemini() {
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const questionSchema = {
    type: "object",
    properties: {
      quiz: {
        type: "array",
        minItems: 10, // Ensure at least one question
        maxItems: 10, // Set a maximum number of questions (adjust as needed)
        items: {
          type: "object",
          properties: {
            question: {
              type: "string",
            },
            options: {
              type: "array",
              items: {
                type: "string",
              },
            },
            correctOption: {
              type: "number",
            },
            points: {
              type: "number",
            },
          },
          required: ["question", "options", "correctOption", "points"],
        },
      },
    },
    required: ["quiz"],
  };
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: questionSchema,
    },
  });

  const prompt = `Generate a quiz of 10 questions on the topic of "JavaScript" with a difficulty level of "medium". Each question should have 4 options, with only one correct answer. Provide points for each question based on its difficulty.`;

  useEffect(
    function () {
      async function getQuestions() {
        try {
          const res = await model.generateContent(prompt);
          const data = JSON.parse(res.response.text());
          setQuestions(data);
        } catch (err) {
          console.log(err);
        } finally {
          console.log("done");
        }
      }
      // getQuestions();
    },
    [prompt]
  );

  return { question };
}
