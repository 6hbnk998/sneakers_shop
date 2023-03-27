
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';
import React from 'react';

// const arr = [
//   {name:'Кроссовки Titan', price:'8 990 ₽', img: './img/sneakers/1.jpg'},
//   {name:'Кроссовки Winner SL', price:'9 990 ₽',  img: './img/sneakers/2.jpg'},
//   {name:'Кроссовки Titan', price:'8 990 ₽',  img: './img/sneakers/3.jpg'},
//   {name:'Кроссовки Nike Air Max Terrascape 90', price:'14 990 ₽',  img: './img/sneakers/4.jpg'}

// ];



function App() {
  const [items, setItems] = React.useState([])
  const [cardShow, setCardShow] = React.useState(false)
   React.useEffect(()=>{
    fetch('https://64219ad186992901b2b7c0db.mockapi.io/items')
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      setItems(json);
    });
  },[]);




  return (
    <div className="wrapper">
     {cardShow ? <Drawer cardClose={()=> setCardShow(false)}/> : null}
      <Header onClickCard ={()=> setCardShow(true)} />
      {/* <header>
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
      </header> */}

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
          {items.map((obj)=>(
            <Card 
            name={obj.name} 
            price ={obj.price} 
            img= {obj.img}
            onClickAdd = {()=>console.log('Вы нажали на плюс')}
            />
          ))}
        {/* <div className="card">
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
        </div> */}

        </div>
    </div>
    </div>
  );
}

export default App;

