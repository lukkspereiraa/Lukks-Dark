
import Input from '../input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'
import './style.css'
//componestes estilizados
const PesquisaConteiner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color:#fff;
`
const TituloDePesquisa = styled.h2`
    font-size: 30px;
    margin-bottom: 20px;

`


function Pesquisa() {
    const [livrosPesquisasdos, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaConteiner>
            <TituloDePesquisa>Encontre as melhores histórias de Dark Fantasy</TituloDePesquisa>
            <Input placeholder='Qual sera nossa próxima aventura?'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const textoCorigido = textoDigitado.charAt(0).toUpperCase() + textoDigitado.slice(1);

                    if(textoDigitado !== ''){
                        const resutadoDaPesquisaPeloNome = livros.filter (livro => livro.nome.includes(textoCorigido) || livro.franquia.includes(textoCorigido))
                        setLivrosPesquisados(resutadoDaPesquisaPeloNome);
                        console.log(resutadoDaPesquisaPeloNome)
                    }   
                }} />
            <ul className='display_livros'>
                {livrosPesquisasdos.map(livro => (
                    <li className='lista_livros' >
                        <h2 className='nome-do-livro'>{livro.nome}</h2>
                        <img src={livro.src} alt='capa do livro' className='imagem_livro'></img>
                        <h3 className='nome-da-frnquia'>{livro.franquia} vol:{livro.volume}</h3>
                    </li>
                ))}
            </ul>
        </PesquisaConteiner>

    )
}
export default Pesquisa