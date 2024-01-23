import { useState, useRef, useEffect } from "react"

export default function SignUpToNewsLetter() {
    const [email, setEmail] = useState("");
    const inputElement = useRef(null);

    const handleClick = () => {
        if(!email){
            inputElement.current.style.border = "5px solid red";
            inputElement.current.focus();
        }

    };

    useEffect(() => {
        if(email){
            inputElement.current.style.border = "none";
        }
    },[email]);
  return (
    <div>
      <input type="email" placeholder="Email.."
      ref= {inputElement} value={email}
      onChange={(e)=> setEmail(e.target.value)}/>
      <button onClick={handleClick}>Sign Up to NewsLetter</button>
    </div>
  )
}
