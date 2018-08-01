import React from 'react'
import { graphql } from "gatsby"
import styled from "styled-components"

import wsj from "../images/The_Wall_Street_Journal.svg"
import tst from "../images/The_Straits_Times_Logo.svg"
import huffPost from "../images/HuffPost.svg"
import scmp from "../images/SCMP_logo.svg"

const Container = styled.div`
    max-width: 1200px;
    height: auto;
    margin: 1rem auto;
    padding: 8rem 2rem;

    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

const Header = styled.h5`
    color: #767676;
    text-align: center;
`;

const LogoGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3rem 0;

`;

const Logo = styled.img`
    padding: 1rem 1.6rem;
    max-height: 23px;

    @media (max-width: 768px) {
        padding: 2.5em 1.6rem
    }
`;

const Link = styled.a`
    text-decoration: none;
    
`;

export default class Endorsements extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Header>AS SEEN ON</Header>
                <LogoGrid>
                    <Link href="https://www.straitstimes.com/lifestyle/food/trump-kim-summit-10-places-to-go-for-summit-themed-food-and-drinks">
                        <Logo src={tst}/>
                    </Link>
                    <Link href="https://www.wsj.com/articles/ill-have-atomic-wings-for-singapore-foodies-trump-kim-fusion-is-the-bomb-1528650727">
                        <Logo src={wsj}/>
                    </Link>
                    <Link href="https://www.huffingtonpost.com/entry/singapore-summit-north-korea-us-trump-kim_us_5b1a1e43e4b0adfb8267802a">
                        <Logo src={huffPost}/>
                    </Link>
                    {/* <Link href="https://www.scmp.com/magazines/style/news-trends/article/2150183/what-would-you-trump-kim-burger-or-rocket-man-taco">
                        <Logo src={scmp}/>
                    </Link> */}
                    <Logo src={scmp}/>
                </LogoGrid>
                <Header/>
            </Container>
        )
    }
}