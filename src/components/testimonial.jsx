import React from 'react'
import { graphql } from "gatsby"
import styled from "styled-components"

const ComponentWrapper = styled.div`
    // background-color: #2191FB;
    background-color: #FF715B;
    // background-color: #81D2C7;
`;

const Container = styled.div`
    max-width: 960px;
    height: auto;
    margin: 1rem auto;
    padding: 8rem 2rem;

    @media (max-width: 962px) {
        padding: 6rem 2rem;
    }
    
    @media (max-width: 768px) {
        padding: 1rem 0;
    }
`;

const Blockquote = styled.blockquote`
    padding: 2rem 1rem;
`;

const Quote = styled.p`
    color: #ffffff;
    font-family: "Lora", "serif";
    font-weight: 400;
    font-size: 2em;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

`;  

const Footer = styled.footer`
    color: #ffffff;
    font-family: "Open Sans", "sans-serif";

`;

export default class Testimonial extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ComponentWrapper>
                <Container>
                    <Blockquote>
                        <Quote>Serving only the freshest and heartiest burgers, WOLF Burgers believes in the beauty of keeping things simple yet perfect.</Quote>
                        <Footer>— LadyIronChef</Footer>
                    </Blockquote>
                </Container>
            </ComponentWrapper>
        )
    }

}