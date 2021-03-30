import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import { db } from './firebase';

function Product(props) {

    const addToCart= () => {
        const cartItem = db.collection("cartItems").doc(props.id);
        cartItem.get()
        .then((doc) => {
            console.log('ddoc', doc);
            if(doc.exists) {
                cartItem.update({
                    quantity: doc.data().quantity+1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>{props.title}</Title>
            <Price>{props.price}</Price>
            <Rating>
                {
                Array(props.rating)
                .fill()
                .map(rating=> <p><StarIcon/></p>)
                }
            </Rating>
            <Image src={props.image} />
            <ActionSection>
                <AddToCartButton
                onClick={addToCart}
                >Add to Cart</AddToCartButton>
            </ActionSection>
        </Container>


    )
}

export default Product
const Container = styled.div`
background-color:white;
z-index:100;
width:300px;
height:300px;
padding:20px;
margin:10px;
max-height:400px;
display:flex;
flex-direction: column;

`
const Title = styled.span``;
const Price = styled.span`
font-weight:500;
margin-top:3px;
`;
const Rating = styled.div`
display:flex;
`;
const Image = styled.img`
max-height:200px;
object-fit:contain;

`;
const AddToCartButton = styled.button`
width:100px;
background-color:#f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
height:30px;
cursor: pointer;
`;
const ActionSection = styled.div`
margin-top:12px;
display:grid;
place-items:center;
`