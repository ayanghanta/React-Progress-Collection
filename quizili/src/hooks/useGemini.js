import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";

import { API_KEY } from "../../config";

export default function useGemini(
  topic,
  numQuestions,
  diffLabel,
  poinstPerQuestion,
  dispatch
) {
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const questionSchema = {
    type: "object",
    properties: {
      quiz: {
        type: "array",
        minItems: numQuestions, // Ensure at least one question
        maxItems: numQuestions, // Set a maximum number of questions (adjust as needed)
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

  const prompt = `Generate a quiz of ${numQuestions} questions on the topic of "${topic}" with a difficulty level of "${diffLabel}". Each question should have 4 distinct options labeled as 0, 1, 2, 3, with only one correct answer. Provide ${poinstPerQuestion} for each question. For each question, ensure the correct answer is marked with the exact index in the correctOption array. The index of the correct answer must match the position of the correct option in the list of options.Output the response as a JSON object with the following structure {
  correctOption: 2,
  options: ["'props'", " 'state'", " 'context'", " 'ref'"],
  points: 10,
  question:
    "Which mechanism allows sharing data between different components in a React application without prop drilling?",
} `;

  useEffect(
    function () {
      async function getQuestions() {
        try {
          setIsLoading(true);
          const res = await model.generateContent(prompt);
          const data = JSON.parse(res.response.text());

          dispatch({ type: "questionLoaded", payload: data.quiz });
          // setQuestions(data);
        } catch (err) {
          console.log("🧯", err.message);
          setError(err.message);
          throw new Error("There is a problem to load your questons");
        } finally {
          setIsLoading(false);
        }
      }
      getQuestions();
    },
    [prompt]
  );

  return { question, isLoading, error };
}
