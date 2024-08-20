import { BotMessageSquare, Loader, User } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";

interface MessageQueryProps {
  data: any; // Add the 'data' prop here
}
export default function MessageQuery(props: MessageQueryProps) {
  const { data } = props;
  return (
    <>
      <section className="w-full">
        {data.map((message: any, index: number) => (
          <div key={index}>
            {/* user */}
            <div className={`flex gap-4 w-full  `}>
              <div className="rounded-md aspect-square w-8 h-8 border flex justify-center items-center mt-4 bg-black text-white">
                <User size={16} />
              </div>
              <div className="border-b pt-4 flex-1 overflow-auto">
                <Markdown>{message.phrase}</Markdown>
              </div>
            </div>

            {/* assistant */}
            <div className={`flex gap-4 w-full mb-8 `}>
              <div className="rounded-md aspect-square w-8 h-8 border flex justify-center items-center mt-4 bg-gray-300 text-black ">
                <BotMessageSquare size={24} />
              </div>
              <div className="border-b pt-4 flex-1 overflow-auto">
                {message.answer ? (
                  <Markdown>{message.answer}</Markdown>
                ) : (
                  <Loader className="animate-spin" size={14} />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
