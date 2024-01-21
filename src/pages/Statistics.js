import React from "react";
import styled from "styled-components";
import { BiMoneyWithdraw, BiCart , BiMessageDetail, BiListUl, BiCheck, BiTrendingUp, BiLoader, BiStopwatch, BiPieChartAlt, BiTaskX } from "react-icons/bi";
import Card from "../components/Card";

const Statistics = () => {
  let statusIcon = [
                    <BiMoneyWithdraw size={30}/>,
                    <BiMoneyWithdraw size={30}/>,
                    <BiCart size={30}/>,
                    <BiMessageDetail size={30}/>
                   ];
  let statusAmount = [0 + '원', 0 + '원', 0, 0];
  let statusText = ['예치금 잔액', '총 사용 금액', '총 주문', '총 문의'];

  let orderIcon = [
                   <BiListUl size={30}/>,
                   <BiCheck size={30}/>,
                   <BiTrendingUp size={30}/>,
                   <BiLoader size={30}/>,
                   <BiStopwatch size={30}/>,
                   <BiPieChartAlt size={30}/>,
                   <BiTaskX size={30}/>
                  ];
  let orderAmount = [0, 0, 0, 0, 0, 0, 0];
  let orderText = ['총 주문', '완료됨', '처리중', '접수중', '대기중', '부분완료됨', '취소됨'];

  return (
    <Container>
      <StatusWrapper>
        {
          statusIcon.map((i, idx) => 
            <Card 
              icon={statusIcon[idx]}
              amount={statusAmount[idx]}
              text={statusText[idx]}
            />
          )
        }
      </StatusWrapper>
      <div>
        <br/>
        <br/>
        <br/>
        주문처리현황표
        <br/>
        <br/>
        <br/>
      </div>
      <OrderWrapper>
        {
          orderIcon.map((i, idx) => 
            <Card 
              icon={orderIcon[idx]}
              amount={orderAmount[idx]}
              text={orderText[idx]}
            />
          )
        }
      </OrderWrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const OrderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export default Statistics;