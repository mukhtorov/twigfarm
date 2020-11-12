import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
width:100%;
justify-content: center;
margin: 73px 0 157px;
`

export const Form = styled.div`
  width: 585px;
  height: fit-content;
  margin: 0 0 6px;
  padding: 68px 72px 34px 72px;
  border-radius: 11px;
  border: solid 1px #dadce0;

`

export const Title = styled.div`
  font-family: Arial;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2f2f2f;
  margin-bottom: 10px;

`

export const Content = styled.div`
 font-family: Arial;
  font-size: 16px;
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1f1f1f;
`
