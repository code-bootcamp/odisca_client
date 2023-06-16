import styled from "@emotion/styled";

export const Wrapper = styled.main``;

export const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
`;

export const MenuList = styled.button`
  width: 95px;
  height: 30px;
  list-style: none;
  font-size: 18px;
  color: #828282;
  margin: 40px 10px 20px 0;
  cursor: pointer;
  background-color: white;
  border: none;
  &.is-active {
    border-bottom: 3px solid #40e0d0;
    color: #4f4f4f;
    font-weight: 500;
  }
  :hover {
    color: #4f4f4f;
    font-weight: 500;
  }
`;

export const Contents = styled.div``;
