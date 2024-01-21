import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { BiLineChart, BiCalendarWeek, BiCart, BiListUl, BiCreditCard } from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setCurrentPage(path);
  };

  return (
    <SidebarWrapper>
      <Title>WEZXRO</Title>
      <Link to="/statistics">
        <MenuItem
          onClick={() => handleMenuClick('/statistics')}
          active={currentPage === '/statistics'}
        >
          <BiLineChart className='icon' size={20}/>대시보드
        </MenuItem>
      </Link>
      <Link to="/order">
        <MenuItem
          onClick={() => handleMenuClick('/order')}
          active={currentPage === '/order'}
        >
          <BiCalendarWeek className='icon' size={20}/>주문 내역
        </MenuItem>
      </Link>
      <Link to="/add-order">
        <MenuItem
          onClick={() => handleMenuClick('/add-order')}
          active={currentPage === '/add-order'}
        >
          <BiCart className='icon' size={20}/>주문하기
        </MenuItem>
      </Link>
      <Link to="/services">
        <MenuItem
          onClick={() => handleMenuClick('/services')}
          active={currentPage === '/services'}
        >
          <BiListUl className='icon' size={20}/>서비스 목록
        </MenuItem>
      </Link>
      <Link to="/transactions">
        <MenuItem
          onClick={() => handleMenuClick('/transactions')}
          active={currentPage === '/transactions'}
        >
          <BiCreditCard className='icon' size={20}/>충전 신청
          </MenuItem>
      </Link>
    </SidebarWrapper>
  );
}

/***** styled-components *****/
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 248px;
  height: 100%;
  padding: 8px;
  border: 1px solid var(--gray01);
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding-bottom: 8px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid var(--gray01);
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 232px;
  margin: 2px 0;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--gray01);
    border-radius: 6px;

    .icon {
      background-color: var(--gray01);
    }
  }

  ${({ active }) => active && `
    background-color: var(--gray01);
    border-radius: 6px;

    .icon {
      background-color: var(--gray01);
    }
  `}
`;

export default Sidebar;