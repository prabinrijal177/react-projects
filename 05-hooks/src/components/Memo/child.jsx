/* eslint-disable react-refresh/only-export-components */
import { memo } from "react"

 function Child({prop}) {
    console.log("child is rerendered")
  return (
    <div>
     <h1>{prop}</h1>
    </div>
  )
}
export default memo(Child);
