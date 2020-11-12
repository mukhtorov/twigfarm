import React from 'react'
import { Form, Wrapper, Title, Content } from './style'
import Checkbox from '../Checkbox'
import Forms from '../Form'



const Home = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Gconstudio 계정 만들기</Title>
        <Content>하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</Content>
        <Checkbox />
        <Forms onSubmit={(value) => console.log(value)} />
      </Form>
    </Wrapper>
  )
}

export default Home;