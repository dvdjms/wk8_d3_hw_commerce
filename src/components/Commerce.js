import React from "react";
import styled from 'styled-components';

const Commerce = ({products}) => {

    const productList = products.map((products) => {
    
        return (
            <List><Div1>{products.product}</Div1>
                <Div2>Price: £{products.price}</Div2>
                <Div3><button>Add to Basket</button></Div3>
            </List> 
        )
  
    });
    console.log(productList)
    return (
        <>
        <Header>
            <Logo>Commerce</Logo>
                <UnorderedList1>
                    <Links><Linka href="/">Home</Linka></Links>
                    <Links><Linka href="/basket">Basket</Linka></Links>
                </UnorderedList1>
        </Header>
        <PageTitle>Home</PageTitle>
        <UnorderedList2>
            {productList}
        </UnorderedList2>
        </>
    );
};


const Linka = styled.a`
    text-decoration: none;
    color: white;
`

const PageTitle = styled.h1`
    text-align: center;
`

const Links = styled.li`
      color: white;
      display: inline;
      margin-left: 15px;
`

const Logo = styled.div`
    float: left;
    width: 14%;
    height: 65px;
    margin: 0px;
    color: white;
    font-size: 30px;
    font-weight: 700;
    font-family: sans-serif;
    padding-top: 15px;
    padding-left: 25px;
`

const Header = styled.div`
    height: 65px;
    background-color: #003366;
`

const List = styled.li`
    float: left;
    margin-left: 25%;
    width: 75%;
    margin-bottom: 10px;
`

const Div1 = styled.div`
    float: left;
    width: 30%;
`

const Div2 = styled.div`
    float: left;            
    width: 30%;
`
const Div3 = styled.div`
    float: left;
    width: 30%;
`

const UnorderedList1 = styled.ul`
 
    float: left;
    width: 70%;
    list-style: none;
    padding-top: 8px;
`


const UnorderedList2 = styled.ul`
    margin-top: 50px;
    list-style: none;
`

export default Commerce;