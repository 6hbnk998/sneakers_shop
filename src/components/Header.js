
function Header(){
    return(
        <header>
        <div  className="header-left">
          <img width={40} height={40} src="./img/sneaker-logo.png" alt="" />
          <div className="header-left-info">
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
          <ul className="header-right">
            <li>
              <img width={20} height={20} src="./img/bag.svg" alt=""/>
              <span>1205 р.</span>
            </li>
            <li>
              <img width={30} height={20} src="./img/user.svg" alt=""></img>
            </li>
          </ul> 
      </header>
    );
}

export default Header;