import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#af9a7d';
const mainBlack = '#222';
const mainSpacing = '3px';
const mainTransition = 'all 0.3s linear';

export const PrimaryButtonContainer = styled(Link)`
  display: inline-block;
    text-decoration: none;
    letter-spacing: ${mainSpacing};
    color: ${mainBlack};
    background: ${primaryColor};
    padding: 0.4rem 0.9rem;
    border: 3px solid ${primaryColor};
    transition: ${mainTransition};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background: transparent;
        color: ${primaryColor}
    }
`;