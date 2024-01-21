import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Login = () => {
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
      <Sub>서비스 이용을 위해 로그인해주세요.</Sub>
      <Form onSubmit={onSubmitHandler}>
        <Label>이메일</Label>
        <Id type="email" placeholder="이메일을 입력해주세요."></Id>
        <Label>비밀번호</Label>
        <Pw type="password" placeholder="비밀번호를 입력해주세요."></Pw>
        <ButtonWrapper>
          <Button>로그인</Button>
          <Button>둘러보기</Button>
        </ButtonWrapper>
        <SignUpWrapper>
          아직 회원이 아니시라면 <SignUp>회원가입</SignUp> 후 이용해주세요.
        </SignUpWrapper>
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 400px;
  margin: 16px;
  padding: 32px 16px;
  border: 1px solid var(--gray02);
  border-radius: 8px;  
`;

const Label = styled.label`
  margin-top:16px;
  margin-bottom: 8px;
  color: var(--gray02);
  font-size: 13px;
`;

const Id = styled.input`
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
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

const SignUpWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  margin-top: 16px;
  color: var(--gray02);
`;

const SignUp = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export default Login;