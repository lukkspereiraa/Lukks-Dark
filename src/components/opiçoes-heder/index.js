
import styled from 'styled-components'
const opiçaoDeTexto = ['CATEGORIAS', 'LISTA DE DESEJO', 'ESTANTE']

// estilizaçao de componenetes
const Opiçoes = styled.ul`
    display: flex;
    margin-left: 3px;
`
const Opiçao = styled.li`
    font-size: 16px;
    min-width: 120px;
    justify-content: center;
    align-items: center; 
    text-align: center;
    display: flex;
    cursor: pointer;
    padding: 0 15px;
`
const OpiçaoTextoHouver = styled.p`
    :hover{scale: 1.3;
    border-bottom: solid 2px #519872;
    transition: 200ms linear}
`

function OpiçaoHeder() {
    
    return(
    <Opiçoes>
        {opiçaoDeTexto.map((texto) => (
            <Opiçao><OpiçaoTextoHouver>{texto}</OpiçaoTextoHouver></Opiçao>
        ))}
    </Opiçoes>)
}

export default OpiçaoHeder