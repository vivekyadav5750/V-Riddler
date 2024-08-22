import type { PromptRunType } from "@/app/schema/types";
import model from "./setup";

export async function PromptRun({ chatHistory, phrase }: PromptRunType) {
  // console.log("PromptRun : ", phrase, chatHistory);

  const result = await model.generateContent(` ${phrase}`);

  const text = result.response.text();
  return text;
}
