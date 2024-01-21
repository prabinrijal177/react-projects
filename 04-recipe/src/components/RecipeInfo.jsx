/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom"

export default function RecipeInfo({instructions, image}) {
  return (
    <div className="recipe-info">
      <Outlet/>
        <img src={image} alt="" className="recipe-img" />
      </div>

    </div>
  )
}
