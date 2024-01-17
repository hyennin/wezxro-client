import React, { useState } from 'react';
import styled from 'styled-components';
import { BiBell, BiUserCircle, BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
	const [isBtnVisible, setBtnVisible] = useState(false);

  const toggleBtnVisibility = () => {
    setBtnVisible(!isBtnVisible);
  };

  return (
    <HeaderWrapper>
			<BiBell size={20}/>
			<Profile onClick={toggleBtnVisibility}>
				<Info>
					<Name>밍밍님</Name>
					<Amount>150000원</Amount>
				</Info>
				<BiUserCircle size={20}/>
				{isBtnVisible && (
					<Link to='/로그아웃~~'>
						<ButtonContainer>
							<Button>
								<BiLogOut className='logout' size={20}/>로그아웃
							</Button>
						</ButtonContainer>
					</Link>
				)}
			</Profile>
    </HeaderWrapper>
  );
}

/***** styled-components *****/
const HeaderWrapper = styled.div`
	width: 100%;
	height: 58px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	column-gap: 16px;
	border-bottom: 1px solid var(--gray01);
`;

const Profile = styled.div`
  position: relative;
	display: flex;
	align-items: center;
	column-gap: 8px;
	margin-right: 16px;
	cursor: pointer;

	.logout {
		margin-right: 4px;
		background-color: var(--gray01);
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 2px;
`;

const Name = styled.div`
	font-size: 13px;
`;

const Amount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	padding: 0 8px;
	background-color: var(--gray01);
	border-radius: 6px;
	font-size: 12px;
`;

const ButtonContainer = styled.div`
	position: absolute;
	top: calc(100% + 12px);
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 4px;
	padding: 4px;
	background-color: var(--gray01);
	border-radius: 6px;
	border: 1px solid var(--gray01);
	
  &:before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(100%);
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent var(--gray01) transparent;
  }
`;

const Button = styled.button`
	display: flex;
	padding: 4px;
	background-color: var(--gray01);
	white-space: nowrap;

	&:hover{
		background-color: var(--gray00);
		border-radius: 6px;
			
		.logout {
			background-color: var(--gray00);
		}
	}
`;

export default Header;