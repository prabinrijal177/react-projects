import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {

  const [showModal, setShowModal] = useState(false);


  const handleOpen = setShowModal(true);
  const handleClose = setShowModal(false);


  return (
    <div className="App">
      {showModal && <Modal onClose={handleClose}/>}
      <h1>My Birthday Gifts</h1>
      <div className="cards">
        <button onClick={handleOpen}>Add a Gift</button>
      </div>
      <div className="cards-gift">
        {/* {[].map((gift) => (
          <div className="card-gift" key={gift.id}>
            <img src={gift.image} alt="" />
            <h1>{gift.name}</h1>
            <p>${gift.value}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default App;