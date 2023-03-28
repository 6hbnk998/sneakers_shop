
function Drawer(props){
    return(
        <div  className="drawer-overlay">
        <div  className="drawer">
        <h2>Корзина
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg" onClick={props.cardClose} alt=""></img>
        </h2>

        <div className="items-sneak">
        <div className="card-item">
        <img width={100} height={110} src="./img/sneakers/1.jpg" alt=""></img>
        <div>
        <p>Кроссовки Winner SL</p>
        <b>9 990 ₽</b>
        </div>
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg" alt=""></img>
        </div>
        <div className="card-item">
        <img width={100} height={110} src="./img/sneakers/1.jpg" alt=""></img>
        <div>
        <p>Кроссовки Winner SL</p>
        <b>9 990 ₽</b>
        </div>
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg" alt=""></img>
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
    );
}

export default Drawer;
