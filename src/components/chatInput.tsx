import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CornerDownLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { handleSubmitPhrase } from "@/redux/reducer";
import { ChatInputProps } from "@/app/schema/types";
import { useEffect, useState } from "react";

export default function ChatInput({ chatHistory,userInput, setUserInput }: ChatInputProps) {
  const dispatch = useDispatch();
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth > 768);
      }
    };

    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth > 768);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className="w-full h-max fixed bottom-0 left-0 right-0  ">
      <div className="bg-background rounded-t-xl border border-b-0 p-4 w-full mx-auto   max-w-[700px]">
        <Card className="flex gap-4 p-4">
          <textarea
            rows={1}
            tabIndex={0}
            className="bg-background outline-none border-none w-full resize-y max-h-32 min-h-8"
            placeholder="Type your message..."
            required
            minLength={2}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (isDesktop && e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                dispatch({ type: "riddler/setInput", payload: userInput });
                dispatch(handleSubmitPhrase({ chatHistory, phrase: userInput }) as any);
                setUserInput("");
              }
            }}
          />

          <Button
            onClick={() => {
              dispatch({ type: "riddler/setInput", payload: userInput });
              dispatch(handleSubmitPhrase({ chatHistory, phrase: userInput }) as any);
              setUserInput("");
            }}
            disabled={!userInput || !userInput}
            size={"icon"}
          >
            <CornerDownLeft size={14} />
          </Button>
        </Card>
      </div>
    </div>
  );
}