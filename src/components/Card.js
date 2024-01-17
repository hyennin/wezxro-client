import React from "react";
import styled from "styled-components";

const Card = (props) => {

  return (
    <CardWrapper>
      {props.icon}
      <AmountWrapper>
        <Amount>
          {props.amount}
        </Amount>
        <Text>
          {props.text}
        </Text>
      </AmountWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 363px;
  height: 88px;
  padding: 8px 16px;
  border: 1px solid var(--gray01);
  border-radius: 8px;
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Text = styled.div`
  color: var(--gray02);
`;

export default Card;