import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    font-family: 'Trump gothic east', sans-serif;
    color: #fff;
    background-color: #111517;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`

export const Group = styled.div`
  width: 34rem;
  & + & {
    margin-top: 2rem;
  }
`

export const Title = styled.div`
  font-size: 3rem;
`

export const SelectedItem = styled.span`
  color: ${({ color }) => color};
`

export const List = styled.ul`
  list-style: none;
`

export const Label = styled.label`
  font-size: 2rem;
`
export const InputGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  font-family: 'Trump gothic east', sans-serif;
  text-transform: uppercase;
  background-color: #f2f2f2;
  border: none;
  font-size: 2rem;
  width: 16rem;
  box-sizing: border-box;
  padding-left: 0.5rem;
`

export const InputWrapper = styled.div`
  position: relative;
  ${Input} {
    padding-right: 2rem;
  }
`

export const ClearIcon = styled.span`
  font-size: 1rem;
  font-weight: bold;
  right: 0.8rem;
  color: #111517;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  bottom: 0.7rem;
  &:hover,
  &:focus {
    color: #ef0d33;
    cursor: pointer;
  }
`

export const Item = styled.li`
  color: ${({ highlighted, color }) => (highlighted ? color : '#fff')};
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  font-size: 1.5rem;
`
