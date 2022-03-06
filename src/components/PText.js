import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only scren and (max-width: 768px){
    font-size: 1.4rem;
  }
  p{
    color: var(--white);
  }
`;

export default function PText({ children, color}){
    return(
        <PStyle>
            <p>{children}</p>
        </PStyle>
    )
}