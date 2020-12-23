import React, {Component} from 'react';

class Erro extends Component{

   

    render(){
        return(
            <div className='containerDoido'>
                <h1>Página não encontrada</h1>
                
                <img src = {require('./redcross.png')} alt='imgErro'></img>
             
                <h2>Aqui não é a deepweb!</h2>
            </div>
        );

    }


}

export default Erro;