import React from 'react'
import '../Styles/PreNavbar.css'

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.55 22.5Q5.6 22.5 4.925 21.825Q4.25 21.15 4.25 20.2Q4.25 19.25 4.925 18.575Q5.6 17.9 6.55 17.9Q7.5 17.9 8.175 18.575Q8.85 19.25 8.85 20.2Q8.85 21.15 8.175 21.825Q7.5 22.5 6.55 22.5ZM17.15 22.5Q16.2 22.5 15.525 21.825Q14.85 21.15 14.85 20.2Q14.85 19.25 15.525 18.575Q16.2 17.9 17.15 17.9Q18.1 17.9 18.775 18.575Q19.45 19.25 19.45 20.2Q19.45 21.15 18.775 21.825Q18.1 22.5 17.15 22.5ZM6.05 5.95 8.35 10.7H15.5Q15.5 10.7 15.5 10.7Q15.5 10.7 15.5 10.7L18.1 5.95Q18.1 5.95 18.1 5.95Q18.1 5.95 18.1 5.95ZM4.8 3.3H20.9Q21.55 3.3 21.775 3.825Q22 4.35 21.75 4.85L17.7 12.1Q17.4 12.675 16.863 13.012Q16.325 13.35 15.65 13.35H7.9L7.1 14.75Q7.1 14.75 7.1 14.75Q7.1 14.75 7.1 14.75H19.5V17.4H6.55Q5.225 17.4 4.588 16.237Q3.95 15.075 4.55 13.95L5.8 11.6L2.2 3.95H0.05V1.3H3.85ZM8.35 10.7H15.5Q15.5 10.7 15.5 10.7Q15.5 10.7 15.5 10.7Z"/></svg>

const PreNavbar = () => {
  return (
    <div className='preNav'>

      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/help/#catagory_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE v</a>
      </div>
      <div>
      <a href="https://www.mi.com/in/site/login">SIGN IN</a> <span>|</span>
      <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzF1ZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
      <a href="https://store.mi.com/in/site/login" > {cartIcon} CART (0)</a>
      </div>

    </div>
  )
}

export default PreNavbar;
