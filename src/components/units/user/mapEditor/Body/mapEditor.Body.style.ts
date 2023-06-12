import styled from "@emotion/styled";
import { mediaQueries } from "../../../../commons/media/mediaQueries";

export const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 40px;
`;

export const Pixel = styled.div`
  width: 1vw;
  height: 1vw;
  border: 0.5px solid #e4e4e4;
`;

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  ${mediaQueries("macBook")} {
    margin-top: 15vh;
  }
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeightDiv = styled.div`
  width: 95vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapEditorTitle = styled.div`
  width: 50vw;
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${mediaQueries("macBook")} {
    width: 60vw;
    height: 15vh;
  }
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
  width: 9vw;
  height: 4vh;
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

  ${mediaQueries("macBook")} {
    width: 13vw;
    height: 5vh;
  }
`;

export const MapEditorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;

  ${mediaQueries("macBook")} {
    margin: 15px 5px 15px 15px;
  }
`;

export const Inputs = styled.div`
  width: 50vw;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  ${mediaQueries("macBook")} {
    width: 60vw;
  }
`;

export const MapEditorInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MapEditorInputFont = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-right: 15px;
  color: #4f4f4f;

  ${mediaQueries("macBook")} {
    font-size: 17px;
    margin-right: 7px;
  }
`;

export const InputButton = styled.button`
  width: 4vw;
  height: 4vh;
  border-radius: 10px;
  border: none;
  color: #fefefe;
  background-color: #40e0d0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${mediaQueries("macBook")} {
    height: 5vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FunctionBtn = styled.button`
  width: 4vw;
  height: 4.3vh;
  border-radius: 10px;
  border: none;
  background: #40e0d0;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  margin-right: 10px;

  ${mediaQueries("macBook")} {
    width: 5.5vw;
    height: 4.7vh;
    margin-right: 5px;
  }
`;

export const DivideLine = styled.div`
  width: 50vw;
  border: 1px solid #bdbdbd;
  margin-top: 20px;

  ${mediaQueries("macBook")} {
    width: 60vw;
  }
`;
