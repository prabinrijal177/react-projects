import { useCallback, useState } from "react";
import _ from "lodash";
import Search from "./Search";


const allAnimals = [
    "Elephant",
    "Tiger",
    "Pig",
    "Giraffe",
    "Rhino",
];
export default function List() {
    const [animals, setAnimals] = useState(allAnimals);

    const handleChange = useCallback((text) =>{
        setAnimals( allAnimals.filter((animal) => animal.toLowerCase().includes(text)));
    },[ ]);
  return (
    <div>
        <button onClick={()=> setAnimals(_.shuffle(allAnimals))}>shuffle</button>
        <Search onChange={handleChange}/>
      <ul>
        {animals.map((animal, index) =>(
            <li key={animal}>
                {index + 1}.{animal}
            </li>
        ))}
      </ul>
    </div>
  )
}
