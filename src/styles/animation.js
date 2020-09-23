import { keyframes, css } from 'styled-components';

const fade = keyframes`
from {
    opacity: .4;
}

to {
    opacity: 1;
}
`
export const fadeIn = ({ time = '1.5s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fade} ${type};`