import { MessageQueryProps } from "@/app/schema/types";
import { BotMessageSquare, Loader, User } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";

export default function MessageQuery(props: MessageQueryProps) {
  const { data, loading } = props;
  return (
    <>
      <section className="w-full">
        {data.map((message: any, index: number) => (
          <div key={index}>
            {message.role === "user" ? (
              <div className={`flex gap-4 w-full  `}>
                <div className="rounded-md aspect-square w-8 h-8 border flex justify-center items-center mt-4 bg-black text-white">
                  <User size={16} />
                </div>
                <div className="border-b pt-4 flex-1 overflow-auto">
                  <Markdown>{message.parts[0].text}</Markdown>
                </div>
              </div>
            ) : (
              <div className={`flex gap-4 w-full mb-8 `}>
                <div className="rounded-md aspect-square w-8 h-8 border flex justify-center items-center mt-4 bg-gray-300 text-black ">
                  <BotMessageSquare size={24} />
                </div>
                <div className="border-b pt-4 flex-1 overflow-auto">
                  <Markdown>{message.parts[0].text}</Markdown>
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className={`flex gap-4 w-full mb-8 `}>
            <div className="rounded-md aspect-square w-8 h-8 border flex justify-center items-center mt-4 bg-gray-300 text-black ">
              <BotMessageSquare size={24} />
            </div>
            <div className="border-b pt-4 flex-1 overflow-auto">
              <Loader size={14} className="animate-spin" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
