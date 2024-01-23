import { useMemo, useState } from "react";

export default function MemoHook() {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState("");

    const isLanguageCoolFun = () =>{
        for (let i=0; i<1000000; i++){}
        if(language === "JS") return "Cool";
        else if(language === "React") return "very cool";
        else if (language === "MERN")return "extra cool";
        else return "";
    };

    const isLanguageCool = useMemo(isLanguageCoolFun,[language]);
  return (
    <div>
      <input type="text"
      value={text}
      onChange={(e)=> setText(e.target.value)} />

      <div>
        <button onClick={() => setLanguage("JS")}>JS</button>
        <button onClick={() => setLanguage("React")}>React</button>
        <button onClick={() => setLanguage("MERN")}>MERN</button>
      </div>
      <p>{isLanguageCool}</p>
    </div>
  );
}
