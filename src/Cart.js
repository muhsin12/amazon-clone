import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({ appCart }) {
    return (
        <Container>
            <CartItems cart={appCart}/>
            <CartTotal></CartTotal>
        </Container>
    )
}

export default Cart

const Container = styled.div`
display:flex;
padding:14px 18px 0 18px;
`

