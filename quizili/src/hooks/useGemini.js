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

  const prompt = `Generate a quiz of ${numQuestions} questions on the topic of "${topic}" with a difficulty level of "${diffLabel}". Each question should have 4 options, with only one correct answer. Provide ${poinstPerQuestion} for each question.**it is very very important that The correct answer should be specified as an index (0, 1, 2, or 3) within the array of options Ensure that the specified correctOption index corresponds to the actual correct answer among the provided options and re-check.**`;

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
