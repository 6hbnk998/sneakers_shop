
function App() {
  return (
    <div className="wrapper">
      <header>
        <div  className="header-left">
          <svg></svg>
          <div className="header-left-info">
            <h3>React sneakers</h3>
            <p>Магазин лучших</p>
          </div>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <svg></svg>
              <span>1205 руб.</span>
            </li>
          </ul>

        </div>  
      </header>

      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div>
  );
}

export default App;
