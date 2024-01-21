/* eslint-disable react/prop-types */


export default function RecipeNutritionalFact({fact, Children}) {

  return (
    <div className="recipe-fact-container">
        {Children}
        <h3>{fact.amount}</h3>
        <p>{fact.category}</p>

    </div>
  )
}
