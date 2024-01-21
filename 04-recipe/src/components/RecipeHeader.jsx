/* eslint-disable react/jsx-key */
import RecipeNutritionalFact from "./RecipeNutritionalFact";
import {AiOutlineFire} from "react-icons/ai";
import {CiWheat} from "react-icons/Ci";
import {BiCheese, BiCake} from "react-icons/Bi";
import {IoFishOutline} from "react-icons/io5";

export default function RecipeHeader({nutritionalFacts, name}) {

    const nutritionalFactsArray = [
        {
            id:1,
            amount: nutritionalFacts.calories,
            category:'calories',
            Icon: AiOutlineFire,
        },
        {
            id:2,
            amount: nutritionalFacts.carbohydrate,
            category:'carbo',
            Icon: CiWheat,
        },
        {
            id:3,
            amount: nutritionalFacts.fat,
            category:'fats',
            Icon: BiCheese,
        },
        {
            id:4,
            amount: nutritionalFacts.protein,
            category:'protein',
            Icon: IoFishOutline,
        },
        {
            id:5,
            amount: nutritionalFacts.sugar,
            category:'sugar',
            Icon: BiCake,
        },
    ]

  return (
    <div className="recipe-header">
       <h1>{name}</h1>
       <div className="nutritional-facts-container">
        {nutritionalFactsArray.map(({Icon, id, amount, category}) => ( <RecipeNutritionalFact  fact= ({ amount, category }), key= {id}>
            <Icon/>
        </RecipeNutritionalFact>
        ))}
       </div>
    </div>
  );
}
