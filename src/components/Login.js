import React from 'react';
import styled from 'styled-components';

export default function Login(props) {
    return (
        <Container>
            <Nav>
                <LogoWrapper>
                    <LogoLink href="/">
                        <LogoImage src="/images/login-logo.svg" alt="Logo" />
                    </LogoLink>
                </LogoWrapper>
                <NavLinks>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </NavLinks>
            </Nav>
            <Section>
                <Hero>
                    <HeroTitle>Welcome to Your Professional Community</HeroTitle>
                    <HeroImage src="/images/login-hero.svg" alt="Hero Image" />
                </Hero>
                <Form>
                    <Google>
                        <GoogleImage src="/images/google.svg"/>
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    padding: 0;
`;
const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px){
        margin-top: 20px;

    }

`
const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6 );
    &:hover{
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
        cursor: pointer;
    }

`
const GoogleImage = styled.img`

`

const LogoWrapper = styled.div`
    width: 135px;
    height: 34px;
    @media (min-width: 768px) {
        padding: 0 5px;
    }
`;

const LogoLink = styled.a`
    text-decoration: none;
`;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    @media (max-width: 768px) {
        padding: 40px 0;
    }
`;

const Hero = styled.div`
    width: 100%;
    text-align: center;
`;

const HeroTitle = styled.h1`
    font-size: 28px;
    color: #2977c9;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 1.5;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    max-width: 700px;
    height: auto;
    margin-top: 20px;
    @media (max-width: 768px) {
        margin-top: 30px;
    }
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
`;
