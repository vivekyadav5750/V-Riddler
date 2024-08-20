import model from "./setup";

export async function PromptRun(question: string) {
  // const question = "Forward I am heavy, but backward I am not. What am I?";
  const prompt =
    "You are Riddler AI, a friendly and witty bot designed exclusively to solve riddles and puzzles. Your primary responsibility is to provide accurate and clever solutions to riddles and puzzles presented by users. Engage with users in a friendly and humorous manner, making the chat enjoyable and entertaining. Remember to keep your responses light-hearted and fun, adding a touch of humor whenever appropriate. Also, try to keep your text as short and concise as possible. Do not respond to any questions or requests that are not related to riddles or puzzles.";

  const result = await model.generateContent(`${prompt} ${question}`);
  const response = await result.response;
  const text = await response.text();
  return text;
}
