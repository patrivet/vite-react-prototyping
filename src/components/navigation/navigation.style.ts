import styled from '@emotion/styled'

export const NavigationContainer = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 80px;
  grid-template-columns: repeat(10, 1fr);

  a {
    padding-top: 5px;
    text-align: center;
    color: black;
    text-decoration: none;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 13px;
    font-weight: 300;
    display: grid;
    justify-items: center;
    background-color: white;

    &.selected {
      background-color: #fddc06;
      border-bottom-color: #fddc06;
    }

    img {
      height: 50px;
      position: relative;
      top: -2px;
    }
  
    &:first-child {
      border-left: none;
    }
  }
`
