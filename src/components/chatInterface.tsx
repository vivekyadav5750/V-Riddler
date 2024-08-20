import React from "react";
import DefaultCard from "./defaultCard";
import ChatInput from "./chatInput";
import { riddlerData } from "@/redux/reducer";
import { useSelector } from "react-redux";
import MessageQuery from "./messageQuery";




export default function ChatInterface() {
  const {data} = useSelector(riddlerData);
  return (
    <>
      <div className="container max-w-[768px] pt-12 pb-32 flex ">
        {data.length === 0 ? (<DefaultCard />) : (<MessageQuery data={data}/>)}
        
      </div>

      <ChatInput />
    </>
  );
}
