import './style.css'
import { TamanhoDoLivro } from "../style/style"


function Card({ titulo, nomeDoLivro, descriçao, imagem }) {
    return (
        <section className="card">
            <div className='cad-div'>

                <div className="card_textos">
                    <h2 className='titulo_card'>{titulo}</h2>
                    <h4 className='nome-do-livro'>{nomeDoLivro}</h4>
                </div>

                <div className="card_descriçao-e-imagem">
                    <p className='descriçao'>{descriçao}</p>
                    <TamanhoDoLivro className='livro' src={imagem} alt="capa do livro recomendado" />
                </div>

            </div>
        </section>
    )
}
export default Card