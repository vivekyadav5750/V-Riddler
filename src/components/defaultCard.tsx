import { handleSubmitPhrase, setInput } from "@/redux/reducer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useDispatch } from "react-redux";

const DEFAULT_PROMPT = [
  "The more you take, the more you leave behind. What am I?",
  "Forward I am heavy, but backward I am not. What am I?",
  "What has to be broken before you can use it?",
  "I can be cracked, made, told, and played. What am I?",
  "What has a heart that doesn't beat?",
  "I'm tall when I'm young, and I'm short when I'm old. What am I?"
];

export default function DefaultCard() {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="mb-10 ">
        <CardHeader>
          <CardTitle className="text-lg">I am Riddler!</CardTitle>
        </CardHeader>
        <CardContent>
          I&#39;m here to solve your riddles and puzzles instantly. Just type in
          any challenge, and I&#39;ll provide the solution. Let&#39;s get
          started and have some fun! 🧩✨
        </CardContent>
      </Card>
      <div className="grid lg:grid-cols-2 gap-2">
        {DEFAULT_PROMPT.map((prompt, index) => (
          <Card
            onClick={() => {
              // dispatch(setInput(prompt));
              dispatch({ type: "riddler/setInput", payload: prompt });
              dispatch(handleSubmitPhrase(prompt) as any);
            }}
            key={index}
            className="rounded-md hover:bg-background/50 duration-200 cursor-pointer"
          >
            <CardContent className="py-2 px-4 text-base">{prompt}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
