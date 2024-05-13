import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  background-color: #542e91;
`

export const HeaderBar = styled.div`
  background-color: #7551ae;
  display: grid;
  justify-content: end;
  height: 30px;
  align-content: center;

  a {
    color: white;
    text-decoration: none;
    padding-left: 30px;
  }

  input {
    width: 170px;
    display: inline-block;
    margin: 0 40px 0 30px;
    border: none;
    border-radius: 3px;
  }
`

export const HeaderContent = styled.div`
  display: grid;
  height: 85px;
  grid-auto-flow: column;
  justify-content: space-between;

  div {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }

  img {
    position: relative;
    top: 8px;
    width: 242px;
  }

  p {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 20px;
    line-height: 85px;
  }
`
