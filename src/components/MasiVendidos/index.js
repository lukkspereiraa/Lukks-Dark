
import './style.css'
import { livros } from "../Pesquisa/dadosPesquisa"
import { TamanhoDoLivro } from '../style/style'
import { DivDeCentrlizaçao } from '../style/style'
import Card from '../Card/Card'

function UtimosLancamentos(){
    const livrosFiltrados = livros.filter(livro => livro.franquia.includes('As cronicas de Gelo e Fogo'))
    
    return(
    
        <section className="exibicao">
            <h2 className='titulo'>Mais vendidos:</h2>
            <div className='exibicao_div'>
                <div className='exibicao-de-livros'>
              {livrosFiltrados.map(livro=> (
                <TamanhoDoLivro src={livro.src} alt="capa do livro"/>
              ))}
              </div>
             <DivDeCentrlizaçao>
             <p className='nome-fraquia'>{livrosFiltrados[0].franquia}</p>
             </DivDeCentrlizaçao>
            </div>
            <Card 
        titulo='Talvez você se interese...'

        nomeDoLivro={livros[0].nome}

        descriçao='De alma destruída, sedento de sangue e de vingança, 
        Jorg foge da sua vida luxuosa e junta-se a um bando de criminosos e mercenários, 
        a quem passa a chamar de irmãos. Na sua mente há apenas um pensamento, matar o Conde de Renar, 
        o responsável pelas mortes da mãe e do irmão, pelas suas cicatrizes e pela sua alma vazia.'

        imagem={livros[0].src}
      />
        </section>
    )
}

export default UtimosLancamentos