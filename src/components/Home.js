import React from 'react'
import styled from "styled-components";
import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MainSide from './MainSide';

export default function Home(props) {
  return (
    <>
 <Header/>
 <Container>
    <Section>
        <h5>
            <a>Hiring in a hurry?</a>
        </h5>
        <p>Find talented pros in record time with Upwork and keep business moving.</p>
    </Section>
        <Layout>
           <LeftSide/>
           <MainSide/>
           <RightSide/>
           
        </Layout>
 </Container>
 </>
  )
}
const Container = styled.div`
    padding-top: 60px;
    max-width: 100%;

`
const Content = styled.div`
     max-width: 1128px;
     margin-left: auto;
     margin-right: auto;
`

const Section = styled.section `
    min-height: 50px;
    padding: 16px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
     h5 {
        color: #0a66c2;
        font-size: 14px;
        a {
            font-weight: 700;
        }

     }
     p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
     }
     @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
     }
`
const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside mainside rightside";
    grid-template-columns: minmax(0, 5) minmax(0, 12) minmax(300px, 7);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-rows: auto; */
    margin: 25px;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;


    }
`

