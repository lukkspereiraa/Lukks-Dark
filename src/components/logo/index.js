
import styled from 'styled-components'
import logo from '../../img/logo.png'

// estilo componetes 
const LogoCompleto = styled.div`
    display: flex;
    font-size: 30px;
    width: 100vw;
    align-items: center;
`
const ImagemLogo = styled.img`
    width: 25vh;
    position: relative;
    top: 1vh;
    left: -3vw;
`
const LogoTexto = styled.p`
    position: relative;
    left: -6vw;
`


function Logo() {

    return (
        <LogoCompleto>
            <ImagemLogo src={logo} alt='logo'/>
            <LogoTexto><strong>LUKKS</strong> Dark Fantasy</LogoTexto>
        </LogoCompleto>
    )
}

export default Logo