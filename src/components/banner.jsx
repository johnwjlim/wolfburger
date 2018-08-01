import React from 'react'
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
    margin: 1rem auto;
    // height: 600px;
    // width: 100%;
    // width: 500px;
    // height: 800px;
    
`;

export default class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Img fluid={this.props.image.childImageSharp.fluid}/>
            </Container>
        )
    }
}