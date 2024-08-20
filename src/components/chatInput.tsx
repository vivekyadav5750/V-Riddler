import { Card } from "./ui/card";
import { CornerDownLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmitPhrase, riddlerData, setInput } from "@/redux/reducer";
import { useState } from "react";

export default function ChatInput() {
  const { input } = useSelector(riddlerData);
  const [userInput, setUserInput] = useState(input);
  const dispatch = useDispatch();
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
            onChange={(e) =>
              // dispatch({ type: "riddler/setInput", payload: e.target.value })
              setUserInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                dispatch({ type: "riddler/setInput", payload: userInput });
                dispatch(handleSubmitPhrase(userInput) as any);
                setUserInput("");
              }
            }}
          />

          <Button
            onClick={() => {
              dispatch({ type: "riddler/setInput", payload: userInput });
              dispatch(handleSubmitPhrase(userInput) as any);
              setUserInput("");
            }}
            disabled={!userInput || !userInput}
            // disabled={!input || isLoading}
            size={"icon"}
          >
            <CornerDownLeft size={14} />
          </Button>
        </Card>
      </div>
    </div>
  );
}
