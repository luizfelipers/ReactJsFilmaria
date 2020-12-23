import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './home.css';


class Home extends Component{

    constructor(props){
        super(props);
        this.state ={
            filmes:[]
        };

        this.loadFilmes = this.loadFilmes.bind(this);

    }

    componentDidMount(){
        this.loadFilmes();

    }
    
    loadFilmes(){
        //Url da API: https://sujeitoprogramador.com/r-api/?api=filmes/
        let url= 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then( (r) => r.json())
        .then( (json) => {
            this.setState({filmes:json});
            console.log(json);
        });
        

    }



    render(){
        return(
            <div className='container'>
              <h1> Pagina Home </h1> 
               
                <div className='lista-filmes'>
                    {this.state.filmes.map( (filme) => {
                        return(
                            <article key={filme.id} className='filme'>
                                <strong>Nome: {filme.nome}</strong>
                                <img src={filme.foto} alt='CapaDoFilme'></img>
                                <Link to = {`/filme/${filme.id}`}>Acessar</Link>
                            </article>

                        )
                    })}
                </div>

            </div>
        );
    }
}
export default Home;