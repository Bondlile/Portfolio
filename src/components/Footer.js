import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Wrapper = styled.footer`
  padding:5%;
  text-align: center;
  background:${props => props.bgColor};
  p{
    font-size:20px;
    font-family:${props => props.theme.fam.regular};
    color:${props => props.color};

  }
`

function Footer() {
  const isLight = useSelector(state => state.theme.isLight);

    const year = moment().year();
  return (
    <Wrapper bgColor={isLight ? '#f3f3f3' : '#000'} color={isLight ? '#000000' : '#f3f3f3'}>
      <p>&copy; {year} Bondlile Moyo. All rights reserved.</p>
        
    </Wrapper>
  )
}

export default Footer