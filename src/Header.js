import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://i.imgur.com/7I9Was5.png"} />
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon></LocationOnIcon>
                <HeaderOption>
                    <OptionLineONe>Hello</OptionLineONe>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon></SearchIcon>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineONe>Hello, Nazari</OptionLineONe>
                    <OptionLineTwo>Account& Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineONe>Returns</OptionLineONe>
                    <OptionLineTwo>&Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon></ShoppingCartIcon>
                        <CartCount>6</CartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    );
}

export default Header;

const Container = styled.div`
height:60px;
background-color: #0F1111;
display:flex;
align-items:center;
color:white;
justify-content: space-between;
`
const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`
const HeaderOptionAddress = styled.div`
padding-left:9px;
display:flex;
align-items:center;
`
const OptionLineONe = styled.div`
`
const OptionLineTwo = styled.div`
font-weight:700;
`

const HeaderSearch = styled.div`
display:flex;
flex-grow:1;
height:40px;
border-radius: 5px;
overflow: hidden;
margin-left:4px;
background-color:white;
:focus-within {
    box-shadow: 0 0 0 3px #F90;
}
`

const HeaderSearchInput = styled.input`
flex-grow:1;
:focus
{
    outline:none;
}

`
const HeaderSearchIconContainer = styled.div`
background-color:#febd69;
width:45px;
color:black;
display:flex;
justify-content:center;
align-items:center;

`
const HeaderNavItems = styled.div`
display:flex;

`
const HeaderOption = styled.div`
padding: 10px 9px 10px 9px;
`


const HeaderOptionCart = styled.div`
display:flex;

a {
    display: flex;
    align-items:center;
    padding-right:9px;
    color:white;
}
`
const CartCount = styled.div`
padding-left:5px;
`
