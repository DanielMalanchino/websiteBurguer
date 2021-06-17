import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products() {
    return(
        <div id='products'>
           <h1>ESCOLHA SEU LANCHE</h1>
           <p>Todos os lanches acompanham fritas</p>
           <div className='a-container'>
                <Productbox image={pimage1} title="Luger Burguer" />
                <Productbox image={pimage2} title="Le Pigeon Burguer" />
           </div>
        </div>
    )
}

export default Products;