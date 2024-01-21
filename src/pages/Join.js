import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Join = () => {
  const history = useHistory();
  
  const onSubmitHandler = () => {
    history.push("/statistics");
  }

  return (
    <Container>
      <Logo>
        <img className="logoImg" src="assets/logo.png" alt="we:zxro"/>
      </Logo>
      <Title>WEZXRO에 오신 것을 환영합니다.</Title>
      <Sub>서비스 이용을 위해 회원으로 가입해주세요.</Sub>
      <Form onSubmit={onSubmitHandler}>
        <Label>이름</Label>
        <Input type="text" placeholder="이름을 입력해주세요."/>
        <Label>이메일</Label>
        <Input type="email" placeholder="이메일을 입력해주세요."/>
        <Label>비밀번호</Label>
        <Pw type="password" placeholder="비밀번호를 입력해주세요."/>
        <Label>비밀번호 확인</Label>
        <Pw type="password" placeholder="비밀번호를 한 번 더 입력해주세요."/>
        <Label>추천인 코드(없는 경우 공란)</Label>
        <Input type="text" placeholder="추천인 코드를 입력해주세요."/>
        <CheckWrapper>
          <CheckBox type="checkbox"/>
          <Tos>이용약관 및 개인정보처리방침</Tos>에 동의합니다.
        </CheckWrapper>
        <ButtonWrapper>
          <Button>회원가입</Button>
        </ButtonWrapper>
        <LoginWrapper>
          이미 가입하셨다면 바로 <Login href="/login">로그인</Login>해주세요.
        </LoginWrapper>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  .logoImg {
    width: 280px;
  }
`;

const Title = styled.div`
  margin-top: 16px;
  font-size: 17px;
  font-weight: bold;
`;

const Sub = styled.div`
  color: var(--gray02);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  margin: 16px;
  padding: 16px;
  border: 1px solid var(--gray02);
  border-radius: 8px;  
`;

const Label = styled.label`
  margin-top:16px;
  margin-bottom: 8px;
  color: var(--gray02);
  font-size: 13px;
`;

const Input = styled.input`
  height: 41px;
  padding-left: 8px;
  border: 1px solid var(--gray02);
  border-radius: 6px;
`;

const Pw = styled.input`
  height: 41px;
  padding-left: 8px;
  border: 1px solid var(--gray02);
  border-radius: 6px;  
`;

const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 24px;
  color: var(--gray02);
`;

const CheckBox = styled.input`
  accent-color: var(--gray02);
`;

const Tos = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 100%;
  height: 54px;
  background-color: var(--gray01);
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--gray00);
    border: 1px solid var(--gray02);
  }
`;

const LoginWrapper = styled.div`
  margin: 16px auto;
  color: var(--gray02);
`;

const Login = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export default Join;