import styles from "./Card.module.scss"
import React from 'react';
console.log(styles)

function Card({onClickAdd,onPlus, name,img, price}){
let [addLike, setAddLike] = React.useState(false);

const isAdded = () =>{
  onPlus({name, img, price});
  setAddLike(!addLike);
}

   return (
        <div className={styles.card}>
          <img width={30} height={20} src="./img/heart-push.svg" alt="Unliked" onClick = {onClickAdd}></img>
            <img width={150} height={150} src={img} alt=""></img>
            <h5>{name}</h5>
            <div className={styles.cardDescr}>
              <div className="card-price">
                <b>{price} ₽</b>
              </div>
              <button >
                <img width={20} height={20}  onClick = {isAdded} src= {addLike ? "./img/checked.png" :  "./img/heart-push.svg" } alt=""></img>
              </button>
            </div>
        </div>
    );
}

export default Card;
