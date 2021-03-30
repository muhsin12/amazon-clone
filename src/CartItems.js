import React from 'react'
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({ cart }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemContainer>
                {
                    cart.map((item)=> {

                      return  <CartItem
                        id={item.id}
                        item={item.product}
                        />
                    })
                }
            </ItemContainer>
        </Container>
    )
}

export default CartItems
const Container = styled.div`
height:300px;
background-color:white;
flex:0.8;
margin-right:20px;
padding:20px;
`
const Title =styled.div`
margin-bottom:8px;
`
const ItemContainer =styled.div``
