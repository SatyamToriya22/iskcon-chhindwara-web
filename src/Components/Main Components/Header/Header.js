import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../../assets/iskcon_cwa_logo.png"
const Header = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <HeaderMenus>
                <HeaderButton onClick={() => navigate("/About")}>About</HeaderButton>
                <HeaderButton onClick={() => navigate("/Blog")}>Blog</HeaderButton>
                <HeaderButton onClick={() => navigate("/Media")}>Media</HeaderButton>
            </HeaderMenus>
            <HeaderImage onClick={() => navigate("/")}/>
            <HeaderMenus>
                <HeaderButton onClick={() => navigate("/Donate")}>Donate</HeaderButton>
                <HeaderButton onClick={() => navigate("/Festivals")}>Festivals</HeaderButton>
                <HeaderButton onClick={() => navigate("/ContactUs")}>ContactUs</HeaderButton>
            </HeaderMenus>
        </Container>
    )
}

export default Header
const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #16235e 0%, #020223 100%);
    `
const HeaderMenus = styled.div`
    width: 30%;
    align-items: center;
    display:grid;
    grid-gap:10px;
    grid-template-columns:repeat(3, minmax(0 , 1fr)) ;
`
const HeaderButton = styled.h3`
    color : white;
    padding : 5px;
    text-align: center;
    cursor: pointer;
    position : relative;
    font-size: 17px;
    transition:all 250ms cubic-bezier(0.25,0.45,0.59,0.94) 0s;


    &:after{
        content:'';
        height:2px;
        position:absolute;
        left:0px;
        right:0px;
        bottom:-6px;
        background-color:white;
        opacity:0;
        transform:scaleX(0);
        transition:all 400ms cubic-bezier(0.25,0.45,0.59,0.94) 0s;
    }
    &:hover{
        font-size: 19px;
        background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
        &:after{
            opacity:1;
            transform:scaleX(1);
        }
    }
`
const HeaderImage = styled.img.attrs({
    src: `${Logo}`
})`
    width : 168px;
    height : 140px;
    margin: 0px 10px;
    cursor: pointer;
`