import { Link } from 'react-router-dom';
import emptyPlate from '../assets/food-not-found';
export default function Error() {
  return (
    <div className="not-found-container">
        <img src={emptyPlate} alt="" className="not-found-image" />
        <h1 className='not-found-header'>{message ? message : "Oh no!"}</h1>
        <p>{explanation ? explanation : "something went wrong"}</p>
        <Link to='/'>Go Back</Link>

    </div>
  )
}
