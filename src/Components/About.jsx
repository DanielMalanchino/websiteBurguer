import React from 'react';
import aboutimage from '../images/about.png'

function About() {
    return(
        <div id='about'>
            <div className='about-text'>
                <h1>NA GRELHA DESDE 1958</h1>
                <p>Sabemos que os nossos hamburgueres na grelha mexem com você. Se olhar bem para eles, vai descobrir que são 100% carne de vaca, sem conservantes nem aditivos, provenientes da Península Ibérica</p>
                <button>Leia mais</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
        </div>
    )
}

export default About;