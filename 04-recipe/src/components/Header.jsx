

export default function Header() {
  return (
    <header className="main_header">
        <div className="text-container">
          <h1 className="header-title"> Explore the <span>ART </span>of cooking</h1>
          <p className="header-description">Bringing flavors to life, one recipe at a time. Welcome to the culinary journey with Recipe App – where inspiration meets innovation in the kitchen.</p>
          <div className="header-input-container">
            <input type="text" placeholder='Find a Recipe'/>
            <button>Search</button>
          </div>
        </div>
        <div>
          <img src='./recipe.jpg' alt="food"  className='main_img'/>
        </div>
      </header>
  )
}
