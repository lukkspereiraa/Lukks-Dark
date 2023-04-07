
import styled from 'styled-components'

import bag from '../../img/bag.svg'
import perfil from '../../img/perfil.svg'
const opiçaoDeIncones = [bag, perfil]

// ESTILOS FEITO COM COMPONENTES
const Icone = styled.li`
    margin-right: 50px;
    cursor: pointer;
   
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
    
`
const IconeHolver = styled.img`
:hover {
    border: solid 2px;
    border-radius: 50%;
    scale: 1.3;
    padding: 0.3em;
    transition: 150ms linear;
    color: #519872;
  }
`

function IconesHeder() {
    return (
       <Icones>
            {opiçaoDeIncones.map((icone) => (
                <Icone><IconeHolver src={icone} ></IconeHolver></Icone>
            ))}
       </Icones>
    )
}

export default IconesHeder