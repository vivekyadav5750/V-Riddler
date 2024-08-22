export type chatHistoryType = {
  role: "user" | "model";
  parts: { text: string }[];
};

export type PromptRunType = {
  chatHistory: chatHistoryType[];
  phrase: string;
};

export type PromptRunResponse = {
  role: "user" | "model";
  parts: { text: string }[];
};

export interface DefaultCardProps {
  chatHistory: chatHistoryType[];
  setUserInput: (value: string) => void;
}

export interface ChatInputProps {
  chatHistory: chatHistoryType[];
  userInput: string;
  setUserInput: (value: string) => void;
}

export interface MessageQueryProps {
  data: chatHistoryType[];
  loading: boolean;
}