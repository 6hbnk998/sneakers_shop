
function App() {
  return (
    <div className="wrapper">
      <div style= {{display: 'none'}} className="drawer-overlay">
        <div  className="drawer">
        <h2>Корзина
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg"></img>
        </h2>

        <div className="items-sneak">
        <div className="card-item">
        <img width={100} height={110} src="./img/sneakers/1.jpg"></img>
        <div>
        <p>Кроссовки Winner SL</p>
        <b>9 990 ₽</b>
        </div>
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg"></img>
        </div>
        <div className="card-item">
        <img width={100} height={110} src="./img/sneakers/1.jpg"></img>
        <div>
        <p>Кроссовки Winner SL</p>
        <b>9 990 ₽</b>
        </div>
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg"></img>
        </div>
        </div>
        <div className="price-and-tax">
      <ul className="price-ul">
        <li>
          <p>Итого</p>
          <div></div>
          <b>21 498</b>
        </li>

        <li>
          <p>Налог 3%</p>
          <div></div>
          <b>645</b>
        </li>
      </ul>
    </div>
    <button>Оформить заказ
      {/* <img width={30} height={20} src="./img/arrow.svg"></img> */}
    </button>
    </div>
    
        
      </div>
      <header>
        <div  className="header-left">
          <img width={40} height={40} src="./img/sneaker-logo.png"/>
          <div className="header-left-info">
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
          <ul className="header-right">
            <li>
              <img width={20} height={20} src="./img/bag.svg"/>
              <span>1205 р.</span>
            </li>
            <li>
              <img width={30} height={20} src="./img/user.svg"></img>
            </li>
          </ul> 
      </header>

      <div className="content">
        <div  className="title-serch">
        <h1>Все кроссовки</h1>
        <div className="search-div">
          <img width={15} height={15} src="./img/search-icon.svg"></img>
          <input placeholder="Поиск...">
          </input>
        </div>
        </div>
        
        <div className="sneakers-list">
          <Card/>
        <div className="card">
          <img width={30} height={20} src="./img/heart-push.svg" alt="Unliked"></img>
            <img width={150} height={150} src="./img/sneakers/1.jpg"></img>
            <h5>Кроссовки Winner SL</h5>
            <div className="card-descr">
              <div className="card-price">
                <b>9 990 ₽</b>
              </div>
              <button>
                <img width={30} height={20} src="./img/plus.svg"></img>
              </button>
            </div>
        </div>
        <div className="card">
            <img width={150} height={150} src="./img/sneakers/2.jpg"></img>
            <h5>Кроссовки Winner SL</h5>
            <div className="card-descr">
              <div className="card-price">
                <b>9 990 ₽</b>
              </div>
              <button>
                <img width={30} height={20} src="./img/plus.svg"></img>
              </button>
            </div>
        </div>

        <div className="card">
            <img width={150} height={150} src="./img/sneakers/3.jpg"></img>
            <h5>Кроссовки Titan</h5>
            <div className="card-descr">
              <div className="card-price">
                <b>8 990 ₽</b>
              </div>
              <button>
                <img width={30} height={20} src="./img/plus.svg"></img>
              </button>
            </div>
        </div>

        <div className="card">
            <img width={140} height={135} src="./img/sneakers/4.jpg"></img>
            <h5>Кроссовки Nike Air Max Terrascape 90</h5>
            <div className="card-descr">
              <div className="card-price">
                <b>14 990 ₽</b>
              </div>
              <button>
                <img width={30} height={20} src="./img/plus.svg"></img>
              </button>
            </div>
        </div>

        </div>
    </div>
    </div>
  );
}

export default App;
