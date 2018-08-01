import React from 'react'
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import Img from "gatsby-image"
// import Header from "../components/header"
import styled from "styled-components"

import Layout from '../components/layout'

import Endorsements from "../components/endorsements"
import Testimonial from "../components/testimonial"
import Banner from "../components/banner"


const HeroHeader = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderText = styled.h5`
  margin: 1.8em;
  font-size: 1.0em;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }

  @media (max-width: 992px) {
    margin: 1.2em;
    font-size: 0.9em;
  }
`;

const BgImage = styled(Img)`
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  positon: absolute;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 2rem auto;
`;

const Blockquote = styled.blockquote`
  max-width: 800px;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    max-width: 32rem;
    padding-left: 4rem;
    padding-right: 4rem;
  
  }

  @media (max-width: 425px) {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Quote = styled.p`
  color: #484848;
  font-family: "Lora", "serif";
  font-size: 1.62em;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

const QuoteFooter = styled.p`
  color: #767676;
  font-size: 1.1em;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Blocker = styled.div`
  margin-bottom: 54%;

  @media (max-width: 768px) {
    margin-bottom: 65%;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  width: 350px;
  margin: 1rem;
`;

const MenuWrapper = styled.div`
  padding: 2rem 0;
  background-color: #701512;

`;

const MenuContainer = Container.extend`
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const MenuHeader = styled.h1`
  font-size: 2.5em; 
  @media (max-width: 1010px) {
    padding : 0 20%;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    padding: 0 5%;
  }
`;

const MenuGrid = styled.div`
  padding: 0 5rem;
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding: 0;
    padding-top: 4rem;
  }
`;

const MenuTextWrapper = styled.div`
  max-width: 400px;
  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 748px) {
    margin: 0 1rem;
  }
`;

const MenuTextHeader = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  padding-top: 0.5rem;
  margin: 0;
  margin-bottom: 2rem;
  
`;

const MenuText = styled.p`
  font-size: 1.1em;
  font-weight: 300;
  padding-top: 0.5rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  font-family: "Open Sans", "sans serif";
  font-weight: 400;
  font-size: 1em;
  padding: 1rem;
  color: white;
  background-color: transparent;
  cursor: pointer;
  margin: 1.8rem 0;
  border-radius: 5px;
  border-width: 1.2px;  
  border-color: white;

  &:hover {
    background-color: white;
    color: #701512;
    transition: 0.3s;
  }
`;

const MenuImageWrapper = ImageWrapper.extend`
  width: 550px;

  @media (max-width: 992px) {
    width: 450px;
  }
  
  @media(max-width: 768px) {
    width: 300px;
  }
`;

export default class Index extends React.Component {
  constructor() {
    super();
  }

//   render() {
//     return (
//       <Layout>
//         <div className="container-fluid">
//         <Header data={this.props.data} siteTitle={"wolf"} image={this.props.data.logo}/>
//           <Img 
//           className="hero"
//           css={{top:0, left:0, right:0, zIndex:-1}}
//           style={{position:"absolute"}}
//           fluid={this.props.data.hero.childImageSharp.fluid}
//           />
//           <div className="container" id="heroText">
//             {/* <h2> WELCOME TO THE PACK</h2> */}
//           </div>
//         </div>
//         <div className="container p-5">
//           <blockquote id="gigi" className="text-right">
//             <p id="quote">I always say, 'Eat clean to stay fit; have a burger to stay sane.'</p>
//             <footer className="blockquote-footer">Gigi Hadid</footer>
//           </blockquote>
//         </div>
//         <div className="container" id="imageGrid">
//           <div className="row py-5">
//             <div className="col-md-6 p-2 m-0" id="imageCol">
//               <Img fluid={this.props.data.wood.childImageSharp.fluid} />
//             </div>
//             {/* <div className="col-md-6" style={{height: "328px"}}>
//               <Img fluid={data.tray.childImageSharp.fluid} />
//             </div> */}
//             <div className="col-md-6 p-2 m-0" id="imageCol">
//               <Img fluid={this.props.data.feast.childImageSharp.fluid} />
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid" id="menuContainer" style={{backgroundColor: "#701512"}}>
//           <div className="container my-3">
//             <h1 id="menuHeader">Explore our menu</h1>
//             <div className="row py-3" id="menuGrid">
//               <div className="col-lg-6" id="menuTextWrapper">
//                 <p id="menuText">
//                   Sample menu text. Check out our burgers, shakes and fries here! Yummy juicy succulent burgers today!
//                 </p>
//                 <a href="https://www.wolfburgers.com/menu">
//                   <button href="https://www.wolfburgers.com/menu" type="button" className="btn btn-outline-light my-4">
//                     <p className="m-2">Explore the menu</p>
//                   </button>
//                 </a>
//               </div>
//               <div className="col-lg-6" id="menuImage">
//                 <Img fluid={this.props.data.spread.childImageSharp.fluid} />
//               </div>
//             </div>
//           </div>       
//         </div>
//       </Layout>
//     )
//   }
// }

  render() {
    return (
      <Layout>
        <HeroHeader>
          <Link to="/" style={{textDecoration: "none"}}>
            <HeaderText>HOME</HeaderText>
          </Link>
          <a href="https://www.wolfburgers.com/menu" style={{textDecoration: "none"}}>
            <HeaderText>MENU</HeaderText>
          </a>
          <a href="https://www.wolfburgers.com/locations" style={{textDecoration: "none"}}>
            <HeaderText>LAIRS</HeaderText>
          </a>
          <a href="https://www.wolfburgers.com/" style={{textDecoration: "none"}}>
            <HeaderText>PRESS</HeaderText>
          </a>
          <a href="https://www.wolfburgers.com/" style={{textDecoration: "none"}}>
            <HeaderText>CATERING</HeaderText>
          </a>
          <a href="https://www.wolfburgers.com/" style={{textDecoration: "none"}}>
            <HeaderText>CONTACT</HeaderText>
          </a>
        </HeroHeader>
        <BgImage className="hero"
          css={{top: 0, left: 0, right: 0, zIndex: -1}}
          style={{position: "absolute"}}
          fluid={this.props.data.hero.childImageSharp.fluid}
        />
        <Blocker/>
        <Container>
          <Blockquote>
            <Quote>
              I always say, 'Eat clean to stay fit; have a burger to stay sane.'
            </Quote>
            <QuoteFooter>— Gigi Hadid</QuoteFooter>
          </Blockquote>
        </Container>
        <Container>
          <ImageGrid style={{margin: "5rem 0"}}>
            <ImageWrapper>
              <Img fluid={this.props.data.wood.childImageSharp.fluid}/>
            </ImageWrapper>
            <ImageWrapper>
              <Img fluid={this.props.data.feast.childImageSharp.fluid}/>
            </ImageWrapper>
          </ImageGrid>
        </Container>
        <MenuWrapper>
          <MenuContainer>
            <MenuHeader>Explore our menu</MenuHeader>
            <MenuGrid>
              <MenuTextWrapper>
                <MenuTextHeader>SPOILED FOR CHOICE</MenuTextHeader>
                <MenuText>
                    Burgers, shakes, fries and more. We've got a little something for everyone.
                </MenuText>   
                <a href="https://www.wolfburgers.com/menu">
                  <Button>Explore the menu</Button>
                </a>
              </MenuTextWrapper>
              <MenuImageWrapper>
                <Img fluid={this.props.data.tray.childImageSharp.fluid}/>
              </MenuImageWrapper>
            </MenuGrid>
          </MenuContainer>
        </MenuWrapper>
        <Banner image={this.props.data.grill2}/>
        <Endorsements/>
        <Testimonial/>
      </Layout>
    )
  }
}

export const query = graphql`
  query GatsbyImageSampleQuery {
    hero:file(relativePath: {eq:"images/hero.png"}) {
      childImageSharp {
        fluid(maxWidth:1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fried:file(relativePath: {eq:"images/fried.jpg"}) {
      childImageSharp {
        fluid(maxHeight:530) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grill:file(relativePath: {eq:"images/grill.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tray:file(relativePath: {eq:"images/tray.jpg"}) {
      childImageSharp {
        fluid(maxWidth:800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spread:file(relativePath: {eq:"images/spread.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wood:file(relativePath: {eq:"images/wood.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    feast:file(relativePath: {eq:"images/feast.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grill2:file(relativePath: {eq:"images/grill2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`