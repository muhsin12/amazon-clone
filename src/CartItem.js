import React from 'react'
import styled from 'styled-components'


function CartItem({ id, item }) {
    return (
        <Container>
            <ImageContainer>
                <img src={item.image}></img>
            </ImageContainer>
            <ItemInfo>
                <InfoTop>{item.name}</InfoTop>
                <InfoBottom>
                    <QuantityContainer>{item.quantity}</QuantityContainer>
                    <DeleteContainer>Delete</DeleteContainer>
                </InfoBottom>
            </ItemInfo>
            <ItemPrice>{item.price}</ItemPrice>
        </Container>
    )
}

export default CartItem
const Container = styled.div`
padding: 12px 0 12x 0;
display:flex;
`
const ImageContainer = styled.div`
width:180px;
height:180px;
flex-shrink:0;
flex-grow:0;
margin-right:15px;
img{
    object-fit:contain;
    width:100%;
    height:100%;
}
`
const ItemInfo = styled.div``
const InfoTop = styled.div`
color:#007185;
font-weight:bold;
h2 {
    font-size:18px;
}
`
const InfoBottom = styled.div`
display:flex;
margin-top:4px;
`
const ItemPrice = styled.div`
font-size:18px;
font-weight:bold;
margin-left:10px;
`
const QuantityContainer = styled.div``
const DeleteContainer = styled.div`
margin-left:10px;
cursor:pointer;
`