import styles from "./Card.module.scss"
console.log(styles)

function Card(props){

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
                <img width={30} height={20} src="./img/plus.svg" alt=""></img>
              </button>
            </div>
        </div>
    );
}

export default Card;