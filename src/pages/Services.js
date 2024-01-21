import React from "react";
import styled from "styled-components";
import service from "../assets/service";

const Services = () => {
  // 더미 데이터 생성 함수
  const generateDummyData = () => {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        id: i,
        name: `상품${i} 서비스 입니다.`,
        price: Math.floor(Math.random() * 10000) + 1000, // 랜덤 가격
        minMaxOrderQuantity: `${Math.floor(Math.random() * 10) + 1} / ${Math.floor(Math.random() * 20) + 10}`,
      });
    }
    return data;
  };

  const data = generateDummyData();
  
  return (
    <Container>
      <Header>
        서비스 목록
        <Select name="category">
          <Option value='0' selected>전체 카테고리</Option>
          {
            service.map((i, idx) =>
             <Option value={idx}>{i}</Option>
            )
          }
        </Select>
      </Header>
      <Table>
        <TableHeader>
          <TableRow>
          <TableHeaderCell width='5%'>ID</TableHeaderCell>
          <TableHeaderCell width='45%'>이름</TableHeaderCell>
          <TableHeaderCell width='10%'>가격(원)</TableHeaderCell>
          <TableHeaderCell width='15%'>최소 / 최대 주문 수량</TableHeaderCell>
          <TableHeaderCell width='25%'>설명</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.minMaxOrderQuantity}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  padding: 0 24px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid var(--gray02);
  border-radius: 6px;
`;

const Option = styled.option`
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border: 1px solid var(--gray02);
  border-radius: 6px;
`;

const TableHeader = styled.thead`
`;

const TableHeaderCell = styled.th`
  text-align: center;
  padding: 8px;
  border: 1px solid var(--gray02);
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid var(--gray02);

  &:nth-child(2) {
    text-align: left;
  }
`;

export default Services;