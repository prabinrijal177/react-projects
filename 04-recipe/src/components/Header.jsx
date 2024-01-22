import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();
  const handleClick = () => {
    handleSearch(searchTerm);
    if (searchTerm) {
      setSearchParams({
        search: searchTerm,
      });
    }
    setSearchTerm("");
  };

  return (
    <header className="main_header">
      <div className="text-container">
      <h1 className="header-title"> Explore the <span>ART </span>of cooking</h1>
          <p className="header-description">Bringing flavors to life, one recipe at a time. Welcome to the culinary journey with Recipe App – where inspiration meets innovation in the kitchen.</p>

        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;



