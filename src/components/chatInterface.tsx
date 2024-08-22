import React, { useState } from "react";
import DefaultCard from "./defaultCard";
import ChatInput from "./chatInput";
import { riddlerData } from "@/redux/reducer";
import { useSelector } from "react-redux";
import MessageQuery from "./messageQuery";

export default function ChatInterface() {
  const { data, input, loading } = useSelector(riddlerData);
  // console.log("loading", loading);
  const [userInput, setUserInput] = useState(input);
  return (
    <>
      <div className="container max-w-[768px] pt-12 pb-32 flex ">
        {data.length === 0 ? (
          <DefaultCard chatHistory={data} setUserInput={setUserInput} />
        ) : (
          <MessageQuery loading={loading} data={data} />
        )}
      </div>

      <ChatInput chatHistory={data} userInput={userInput} setUserInput={setUserInput} />
    </>
  );
}
