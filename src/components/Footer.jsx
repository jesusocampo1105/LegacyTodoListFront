import React from 'react'

export const Footer = () => {
  return (
    <div> 
        <div>
            <aside className='asidei'>
            <img className="img-enc" src={require("../img/flori.png")} alt="logo"/>
            </aside>
        </div> 
        <div>
            <aside className='asided'>
            <img className="img-enc" src={require("../img/flord.png")} alt="logo"/>
            </aside>
        </div>
        <div className='footer'><p>Todos los derechos reservados 2023</p></div>
    </div>
   
  )
}
