import styles from "./Card.module.scss"
import React from 'react';
console.log(styles)

function Card(props){
let [check, setCheck] = React.useState(false);
const checklike = () =>{
  setCheck(!check);

}
   return (
        <div className={styles.card}>
          <img width={30} height={20} src="./img/heart-push.svg" alt="Unliked" onClick = {props.onClickAdd}></img>
            <img width={150} height={150} src={props.img} alt=""></img>
            <h5>{props.name}</h5>
            <div className={styles.cardDescr}>
              <div className="card-price">
                <b>{props.price} ₽</b>
              </div>
              <button >
                <img width={20} height={20} onClick={checklike} src={check ? './img/checked.png' :'./img/plus.svg'} alt=""></img>
              </button>
            </div>
        </div>
    );
}

export default Card;
