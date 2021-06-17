import React from 'react';

function Header() {
    return(
        <div id='main'>
            <div className='header-heading'>
                <h3>É uma boa hora para um delicioso Hamburguer</h3>
                <h1><span>BURGUER</span> DA<br/> SEMANA</h1>
                <p className='details'>Queijo, tomate, alface, cebola roxa e ketchup</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Peça agora</a>
                </div>
            </div>
        </div>
    )
}

export default Header;