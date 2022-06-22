import React from 'react'
import "./Footer.css";


const Footer = () => {


  return (
    <footer className="footer"  id="footer">
    
    <p className="footer__titulo">Bastian Parra Bejar</p>
   {/*
    <div class="footer__social">
        <a href="#" class="footer__icon"><i class='bx bxl-github'></i></a>
        <a href="#" class="footer__icon"><i class='bx bxl-linkedin-square' ></i></a>
        <a href="#" class="footer__icon"><i class='bx bx-envelope' ></i></a>
    </div>
  */}
  <box-icon type='logo' name='github'></box-icon>
    <p className="footer__copy">  Año: 2022</p>
</footer>
  )
}

export default Footer