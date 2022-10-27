import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.section`
  background:${props => props.bgColor};
  transition:all 0.7s ease;
  padding:27% 5% 0 5%;
  height:100vh;
  position:relative;
  @media (min-width:568px) {
    padding:0% 10%;
  }
  @media (min-width:768px) {
    padding:10% 10% 0 10%;
    max-height: 768px;
  }
  @media (min-width:992px) {
  
    padding:2% 10% 0 10%;
    max-height: 992px;
  }
  @media (min-width:1200px) {
  
    padding:0px 5% 0 5%;
    max-height: unset;
  }
  h1{
    font-family: 'bold';
    font-size:28px;
    color:${props => props.theme.color.blue};
    margin-bottom:50px;
    padding-top:18%;
    @media (min-width:768px) {
      font-size:50px;
      padding-top: 20%;
     
    }
    @media (min-width:992px) {
      padding-top: 32%;
     
    }
    @media (min-width:1200px) {
      padding-top: 20%!important;
     
         }
  }
  p{
    color:${props => props.color};
    font-family: 'regular';
    font-size: 16px;
    line-height: 1.5;
    max-width:850px;
    @media (min-width:768px) {
      font-size:30px;
    }
  }
  img{
    width:100px;
    transform:rotate(90deg);
    position:absolute;
    bottom:0;
    left:-2%;
    @media (min-width:768px) {
      left:7%;
    }
  }
`

function Banner() {
  const isLight = useSelector(state => state.theme.isLight);
  return (
    <Wrapper bgColor={isLight ? '#f3f3f3' : '#1d1d1d'} color={isLight ? '#1d1d1d' : '#f3f3f3'}>
        <h1>Hello, I'm Bondlile 👋</h1>
        <p>I'm a Web Developer, I’m passionate, expressive, multi-talented spirit with a
        natural ability to entertain and inspire. I’m never satisfied to just
        come up with ideas. Instead I have an almost impulsive need to act on
        them.</p>
        <img src={!isLight ? './gifs/white.gif' : './gifs/black.gif'} alt="" />
    </Wrapper>
  )
}

export default Banner