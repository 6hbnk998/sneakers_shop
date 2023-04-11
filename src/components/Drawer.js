
import React from 'react';

function Drawer({onClose, items = []}){
  
  const [visibleItem, setVisibleItem] = React.useState(true)

  const toggleVisibleItem = () =>{
    setVisibleItem(false)
  }
 
    return(
        <div  className="drawer-overlay">
        <div  className="drawer">
        <h2>Корзина
        <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg" onClick={onClose} alt=""></img>
        </h2>

        {visibleItem && <div className="items-sneak">
          {items.map((obj)=>(
            <><div className="card-item">
              <img width={100} height={110} src={obj.img} alt=""></img>
              <div>
                <p>{obj.name}</p>
                <b>{obj.price}₽</b>
              </div>
              <img className="remove-item-btn" width={30} height={20} src="./img/plus.svg" onClick = {toggleVisibleItem} alt=""></img>
            </div>
            </>
          ))}

        </div>}
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
