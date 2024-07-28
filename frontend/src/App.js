import { useState } from "react";
import "./App.css";
import Card from "./Card"
import Input from "./Input";
import Themeswitcher from "./Themeswitch";
import Tabs from "./Tabs";

function App() {
  const [prompt, setPrompt] = useState("");
  const [activeTab, setActiveTab] = useState("translation_en_to_de");

  const handlePromptChange = (newPrompt) => {
    setPrompt(newPrompt);
  };
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };
  
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <Themeswitcher/>
        <Tabs activeTab={activeTab} onTabChange={handleTabChange}/>
        <Input prompt={prompt} onPromptChange={handlePromptChange}/>
        <Card prompt={prompt} task={activeTab}/>
      </div>
    </div>
  );
}

export default App
