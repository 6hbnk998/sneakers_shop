



function Card(){
    return (
        <div className="card">
          <img width={30} height={20} src="./img/heart-push.svg" alt="Unliked"></img>
            <img width={150} height={150} src="./img/sneakers/1.jpg" alt=""></img>
            <h5>Кроссовки Winner SL</h5>
            <div className="card-descr">
              <div className="card-price">
                <b>9 990 ₽</b>
              </div>
              <button>
                <img width={30} height={20} src="./img/plus.svg" alt=""></img>
              </button>
            </div>
        </div>
    );
}

export default Card;