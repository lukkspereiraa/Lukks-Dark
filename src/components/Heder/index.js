
import Logo from '../logo'
import OpiçaoHeder from '../opiçoes-heder';
import IconesHeder from '../iconesHeder';
import styled from 'styled-components';

// estilizaçao como componete 
const HeaderConteiner = styled.header`
    background-color: #fff;
    border-bottom: solid 2px #A4B494;
    display: flex;
    justify-items: center;
`

function Heder() {
    return (
        <HeaderConteiner>
            <Logo />
            <OpiçaoHeder />
            <IconesHeder />
        </HeaderConteiner>
    )
}

export default Heder