import { useState, useRef } from "react";

export default function MagicNumber() {
    const MagicNumber = 5;
    const secondMagicNumber = 10;
    console.log("the component is rerendering");

    const [messages, setMessages] = useState({
        p: "",
        button: "Click Me Until You Reach Magic Number",
    });

 const count = useRef(0);


    const handleClick = () => {
        count.current = count.current + 1;

        if(count.current === MagicNumber){
            setMessages({
                p:"You Have Reached It!",
                button: "Click Me Until You Reach The Magic Number",

            })
        } else if(count.current === secondMagicNumber){
            setMessages({
                p:"You Have Reached It Again!",
                button: "Stop Clicking Again!",

            })
        }

    };
  return (
    <div>
   {messages.p && <p>{messages.p}</p>}
   <button onClick={handleClick}>{messages.button}</button>
    </div>
  )
}
