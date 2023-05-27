import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.main`
  padding: 40px;
`;

export const Pixel = styled.div`
  width: 1vw;
  height: 1vw;
  border: 0.5px solid #e4e4e4;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;

export const Box = styled.div`
  position: absolute;
  top: 25vw;
  left: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #bdbdbd;
  z-index: 0;
`;
export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeightDiv = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapEditorTitle = styled.div`
  width: 600px;
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 15px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.p`
  font-size: 28px;
`;

export const Info = styled.span`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 400;
`;

export const MapEditorInput = styled.input`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  text-indent: 10px;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  color: #4f4f4f;
  :focus {
    outline: 2px solid #40e0d0;
  }
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const MapEditorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
`;

export const MapEditorInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const MapEditorInputFont = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-right: 15px;
  color: #4f4f4f;
`;

export const InputButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: #fefefe;
  background-color: #40e0d0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 20vw;
  height: 3vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 30px 10px;
`;

export const FunctionBtn = styled.button`
  width: 4vw;
  height: 3.5vh;
  border-radius: 10px;
  border: none;
  background: #40e0d0;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;
