import tw, { styled } from 'twin.macro';
import { Link as LinkRouter } from '@reach/router';

export const Header = styled.header`
  background-color:#5b0c0c;
  color: white;
  display: flex;
  height: 140px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & ol ul {
  margin: 0;
  padding: 0;
  list-style: none
  }

  & figure {
    margin: 0;
  }

  & figure img {
    display: inline;
  }

  & a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: inherit;
  padding: 0 10px;
  }

  & ol {
  display: flex;
  height: inherit;
  }

  & ol li {
    height: inherit
  }

  @media (max-width: 767px) {
    display: block;
    height: auto;

    & ol {
      display: block;
    }

    & ol li {
      height: 50px;
    }

    & a {
    justify-content: center;
    height: 40px;
    font-size: 2em;
    margin-bottom: .5em;
    }

    & .logo {
      text-align: center;
    }
  }
`

export const Container = styled.div`
 max-width: 1000px;
  width: 100%;
  flex: 1;
  margin: 0 auto;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  height: inherit;
  flex-wrap: inherit;
`

export const Menu = styled.nav`
height: inherit;

@media (max-width:767px) {
  position: fixed;
  background: rgba(196,175,145,.8);
  z-index: 3;
  top: 0;
  left: -100vw;
  width: 100vw;
  bottom: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  transition: .3s;

  &.is-active {
    left: 0;
  }
}
`
export const Link = styled(LinkRouter)`
${tw`my-1 text-sm font-medium text-yellow-700 hover:text-yellow-500 md:mx-4 md:my-0`}
`

export const Div = styled.div`

  & .burger-button {
  display: none;
  z-index: 4;
  left: 5px;
  top: 5px;
  text-align: center;
  line-height: 40px;
  position: fixed;
  
}

@media (max-width: 767px) {
  & .burger-button {
    display: block;
  }
}
`
