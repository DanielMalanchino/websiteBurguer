import React from 'react';

function Contact() {
    return(
        <div id='contact'>
            <h1>RESERVE SUA MESA!</h1>
            <form>
                <input type="text" placeholder="Nome completo"></input>
                <input type="email" placeholder="Digite seu e-mail"></input>
                <textarea placeholder="Escreva aqui..."></textarea>
                <input type="submit" value="RESERVE"></input>
            </form>
        </div>
    )
}

export default Contact;