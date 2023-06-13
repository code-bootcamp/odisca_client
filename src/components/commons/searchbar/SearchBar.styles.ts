import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: none;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1vh;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgba(79, 79, 79, 0.8);
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
